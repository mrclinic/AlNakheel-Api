import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOrderDto } from './dto/create.order.dto';

@Injectable()
export class OrdersService {
    constructor(private prisma: PrismaService) { }

    async create(createOrderDto: CreateOrderDto) {
        const { firstName, lastName, phone, items } = createOrderDto;

        return this.prisma.$transaction(async (tx) => {
            // Fetch product prices
            const productIds = items.map(i => i.productId);
            const products = await tx.product.findMany({
                where: { id: { in: productIds } },
            });

            const orderTotal = items.reduce((sum, item) => {
                const product = products.find(p => p.id === item.productId);
                return sum + (product?.price || 0) * item.quantity;
            }, 0);

            // Create order
            const order = await tx.order.create({
                data: {
                    firstName,
                    lastName,
                    phone,
                    totalPrice: orderTotal,
                    items: {
                        create: items.map(i => ({
                            productId: i.productId,
                            quantity: i.quantity,
                            price: products.find(p => p.id === i.productId)?.price || 0,
                        })),
                    },
                },
                include: { items: true },
            });

            // Update salesCount of products
            for (const item of items) {
                await tx.product.update({
                    where: { id: item.productId },
                    data: { salesCount: { increment: item.quantity } },
                });
            }

            return order;
        });
    }

    async findRecent(days = 7) {
        const fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - days);

        return this.prisma.order.findMany({
            where: { createdAt: { gte: fromDate } },
            include: { items: true },
            orderBy: { createdAt: 'desc' },
        });
    }
}
