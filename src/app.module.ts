import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { RelatedProductsModule } from './modules/related-products/related-products.module';
import { BrandsModule } from './modules/brands/brands.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule,
    CategoriesModule,
    RelatedProductsModule, BrandsModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule { }
