import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { PrismaService } from '../../prisma/prisma.service';
import { ProductsModule } from '../products/products.module';
import { CartController } from './cart.controller';

@Module({
  imports: [ProductsModule],
  providers: [CartService, PrismaService],
  controllers: [CartController],
})
export class CartModule {}
