import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { PrismaService } from '../../prisma/prisma.service';
import { WishlistController } from './wishlist.controller';

@Module({
  providers: [WishlistService, PrismaService],
  controllers: [WishlistController],
})
export class WishlistModule {}
