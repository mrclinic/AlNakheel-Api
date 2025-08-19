import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WishlistService {
  constructor(private prisma: PrismaService) { }

  async add(userId: number, productId: number) {
    return this.prisma.wishlistItem.create({ data: { userId, productId } });
  }

  async remove(userId: number, productId: number) {
    return this.prisma.wishlistItem.delete({ where: { user_wishlist_unique: { userId, productId } } });
  }

  async list(userId: number) {
    return this.prisma.wishlistItem.findMany({ where: { userId }, include: { product: true } });
  }
}
