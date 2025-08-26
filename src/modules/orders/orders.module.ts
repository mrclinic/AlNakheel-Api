import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { PrismaService } from '../../prisma/prisma.service';
import { OrdersController } from './orders.controller';

@Module({
    providers: [OrdersService, PrismaService],
    controllers: [OrdersController],
    exports: [OrdersService],
})
export class OrdersModule { }
