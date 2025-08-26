import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) { }

  async addToCart(userId: number, productId: number, qty = 1) {
    const product = await this.prisma.product.findUnique({ where: { id: productId } });
    if (!product) throw new NotFoundException('Product not found');
    //if (product.stock < qty) throw new BadRequestException('Not enough stock');

    const existing = await this.prisma.cartItem.findUnique({ where: { user_product_unique: { userId, productId } } }).catch(() => null);

    if (existing) {
      const newQty = existing.quantity + qty;
      //if (product.stock < newQty) throw new BadRequestException('Not enough stock for combined quantity');
      return this.prisma.cartItem.update({ where: { id: existing.id }, data: { quantity: newQty } });
    } else {
      return this.prisma.cartItem.create({ data: { userId, productId, quantity: qty } });
    }
  }

  async updateQty(userId: number, productId: number, qty: number) {
    if (qty <= 0) return this.remove(userId, productId);
    const product = await this.prisma.product.findUnique({ where: { id: productId } });
    if (!product) throw new NotFoundException('Product not found');
    //if (product.stock < qty) throw new BadRequestException('Not enough stock');
    return this.prisma.cartItem.update({
      where: { user_product_unique: { userId, productId } },
      data: { quantity: qty },
    });
  }

  async remove(userId: number, productId: number) {
    return this.prisma.cartItem.delete({ where: { user_product_unique: { userId, productId } } });
  }

  async getCart(userId: number) {
    return this.prisma.cartItem.findMany({
      where: { userId },
      include: { product: {} },
    });
  }

  async checkout(userId: number) {
    const items = await this.getCart(userId);
    if (items.length === 0) throw new BadRequestException('Cart empty');

    return this.prisma.$transaction(async (tx) => {
      for (const it of items) {
        const p = await tx.product.findUnique({ where: { id: it.productId } });
        //if (!p || p.stock < it.quantity) throw new BadRequestException(`Insufficient stock for product ${it.productId}`);
        //await tx.product.update({ where: { id: p.id }, data: { stock: p.stock - it.quantity } });
      }
      await tx.cartItem.deleteMany({ where: { userId } });
      return { success: true };
    });
  }
}
