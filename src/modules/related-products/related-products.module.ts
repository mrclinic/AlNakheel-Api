import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductRelationController } from './product-relation.controller';
import { ProductRelationService } from './product-relation.service';

@Module({
    providers: [ProductRelationService, PrismaService],
    controllers: [ProductRelationController],
    exports: [ProductRelationService],
})
export class RelatedProductsModule { }
