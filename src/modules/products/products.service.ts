import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ProductFilterQueryDto, ProductWithRelatedDto, RemoveRelatedProductsBulkDto } from './dto/product.with.related.dto';
import { AddRelatedProductsBulkDto } from './dto/related-product.dto';
import { PrismaFilterService } from '../../common/prisma-filters';

@Injectable()
export class ProductsService {
  private filterService: PrismaFilterService;
  constructor(private prisma: PrismaService) {
    this.filterService = new PrismaFilterService(prisma);
  }

  async filterProducts(query: ProductFilterQueryDto) {
    const { skip, take, sortField, sortOrder, ...filters } = query;

    return this.filterService.filter(
      'product',
      filters, // everything except pagination/sorting
      { skip, take },
      { field: sortField, direction: sortOrder }
    );
  }

  async create(dto: any) {
    const product = await this.prisma.product.create({ data: dto });
    return product;
  }

  async findAll(filter?: {
    categoryId?: number; search?: string; skip?: number;
    take?: number;
    sortOrder?: 'asc' | 'desc';
  }) {
    const where: any = {};
    if (filter?.categoryId) where.categoryId = filter.categoryId;
    if (filter?.search) where.OR = [
      { name_en: { contains: filter?.search, mode: 'insensitive' } },
      { name_ar: { contains: filter?.search } }, // Arabic doesn’t need mode
      { description_en: { contains: filter?.search, mode: 'insensitive' } },
      { description_ar: { contains: filter?.search } },
    ];
    return this.prisma.product.findMany({ where, include: { brand: true, category: true } });
  }

  async findById(id: number) {
    const p = await this.prisma.product.findUnique({ where: { id }, include: { category: true, brand: true } });
    if (!p) throw new NotFoundException('Product not found');
    return p;
  }

  async update(id: number, dto: any) {
    return this.prisma.product.update({ where: { id }, data: dto });
  }

  async delete(id: number) {
    await this.findById(id);
    return this.prisma.product.delete({ where: { id } });
  }

  /* async addImage(productId: number, url: string) {
    return this.prisma.image.create({ data: { url, productId } });
  } */

  async getRelatedProducts(productId: number): Promise<ProductWithRelatedDto> {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        relatedProducts: { include: { related: true } },
      },
    });

    if (!product) return null;

    return {
      id: product.id,
      name_en: product.name_en,
      name_ar: product.name_ar,
      description_ar: product.description_ar,
      description_en: product.description_en,
      price: product.price,
      image: product.image,
      relatedProducts: product.relatedProducts.map((rel) => ({
        id: rel.related.id,
        name_en: rel.related.name_en,
        name_ar: rel.related.name_ar,
        description_ar: rel.related.description_ar,
        description_en: rel.related.description_en,
        price: rel.related.price,
        image: rel.related.image,
      })),
    };
  }

  async addRelatedProductsBulk(dto: AddRelatedProductsBulkDto) {
    const { productId, relatedIds } = dto;

    if (relatedIds.includes(productId)) {
      throw new BadRequestException('Product cannot relate to itself');
    }

    // Check all products exist
    const products = await this.prisma.product.findMany({
      where: { id: { in: [productId, ...relatedIds] } },
    });

    if (products.length !== relatedIds.length + 1) {
      throw new BadRequestException('One or more products not found');
    }

    // Upsert all relations
    const ops = relatedIds.map((relatedId) =>
      this.prisma.productRelation.upsert({
        where: { productId_relatedId: { productId, relatedId } },
        update: {},
        create: { productId, relatedId },
      }),
    );

    return this.prisma.$transaction(ops);
  }

  async removeRelatedProductsBulk(dto: RemoveRelatedProductsBulkDto) {
    const { productId, relatedIds } = dto;

    return this.prisma.productRelation.deleteMany({
      where: { productId, relatedId: { in: relatedIds } },
    });
  }


}
