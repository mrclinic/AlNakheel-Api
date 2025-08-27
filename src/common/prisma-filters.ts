import { PrismaClient } from '@prisma/client';

type OrderDirection = 'asc' | 'desc';

interface Pagination {
    skip?: number;
    take?: number;
}

interface OrderBy {
    field?: string;
    direction?: OrderDirection;
}

export class PrismaFilterService {
    constructor(private prisma: PrismaClient) { }
    /**
     * Generic filter method
     * @param model - Prisma model name (lowercase)
     * @param filters - Key-value filters
     * @param pagination - skip/take for pagination
     * @param orderBy - Sorting
     */
    async filter<T>(
        model: keyof PrismaClient,
        filters: Record<string, any> = {},
        pagination: Pagination = {},
        orderBy: OrderBy = {}
    ): Promise<{ data: T[]; total: number }> {
        const where = await this.buildWhere(filters, model);

        const [data, total] = await this.prisma.$transaction([
            (this.prisma[model] as any).findMany({
                where,
                skip: pagination.skip,
                take: pagination.take,
                orderBy: orderBy.field ? { [orderBy.field]: orderBy.direction || 'asc' } : undefined,
            }),
            (this.prisma[model] as any).count({ where }),
        ]);

        return { data, total };
    }

    /**
     * Build Prisma where clause from filters
     * Supports operators: eq, contains, in, gte, lte, gt, lt
     */
    private async buildWhere(filters: Record<string, any>, model: keyof PrismaClient) {
        const where: Record<string, any> = {};

        for (const key in filters) {
            if (key !== 'search') {
                if (!filters[key]) continue;

                const [field, op] = key.split('__'); // e.g., priceCents__gte

                if (!op || op === 'eq') {
                    where[field] = filters[key];
                } else if (op === 'contains') {
                    where[field] = { contains: filters[key], mode: 'insensitive' };
                } else if (['gte', 'lte', 'gt', 'lt'].includes(op)) {
                    where[field] = { [op]: Number(filters[key]) };
                } else if (op === 'in') {
                    where[field] = { in: Array.isArray(filters[key]) ? filters[key] : filters[key].split(',') };
                }
            }
        }
        // Special case: categoryId__in → expand to include subcategories
        if (model === 'product' && filters['categoryId__in']) {
            const ids = filters['categoryId__in'].split(',').map((id: string) => parseInt(id));
            const allCategoryIds = await this.expandCategoryIds(ids);
            where['categoryId'] = { in: allCategoryIds };
        }

        // 🔹 Special case: search keyword across multiple fields (only for Product model)
        if (model === 'product' && filters['search']) {
            const keyword = filters['search'];
            // remove it so Prisma doesn't complain
            delete filters['search'];
            where['OR'] = [
                { name_en: { contains: keyword, mode: 'insensitive' } },
                { name_ar: { contains: keyword } },
                { description_en: { contains: keyword, mode: 'insensitive' } },
                { description_ar: { contains: keyword } },
            ];
        }

        return where;
    }

    /**
   * Recursively expand category IDs to include subcategories
   */
    private async expandCategoryIds(ids: number[]): Promise<number[]> {
        const allIds = new Set<number>(ids);

        const fetchSubcategories = async (parentIds: number[]) => {
            const subs = await this.prisma.category.findMany({
                where: { parentId: { in: parentIds } },
                select: { id: true },
            });

            if (subs.length > 0) {
                const subIds = subs.map(s => s.id);
                subIds.forEach(id => allIds.add(id));
                await fetchSubcategories(subIds);
            }
        };

        await fetchSubcategories(ids);
        return Array.from(allIds);
    }
}
