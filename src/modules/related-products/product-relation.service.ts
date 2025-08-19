import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AddRelatedProductDto } from './dto/create-related-product.dto';
import { RemoveRelatedProductDto } from './dto/remove-related-product.dto';

@Injectable()
export class ProductRelationService {
    constructor(private prisma: PrismaService) { }

    async addRelatedProduct(dto: AddRelatedProductDto) {
        const { productId, relatedId } = dto;

        if (productId === relatedId) {
            throw new BadRequestException('Product cannot relate to itself');
        }

        // Check if both products exist
        const [product, related] = await Promise.all([
            this.prisma.product.findUnique({ where: { id: productId } }),
            this.prisma.product.findUnique({ where: { id: relatedId } }),
        ]);

        if (!product || !related) {
            throw new BadRequestException('One or both products not found');
        }

        // Create the relation, ignore duplicates
        return this.prisma.productRelation.upsert({
            where: { productId_relatedId: { productId, relatedId } },
            update: {},
            create: { productId, relatedId },
        });
    }

    async removeRelatedProduct(dto: RemoveRelatedProductDto) {
        const { productId, relatedId } = dto;

        return this.prisma.productRelation.deleteMany({
            where: { productId, relatedId },
        });
    }

    async getRelatedProducts(productId: number) {
        return this.prisma.productRelation.findMany({
            where: { productId },
            include: { related: true },
        });
    }
}
