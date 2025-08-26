
import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create.order.dto';
import { Roles } from '../../common/roles.decorator';
import { RolesGuard } from '../../common/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly svc: OrdersService) { }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create order with multiple items' })
    @ApiResponse({ status: 201, description: 'Order created successfully.' })
    create(@Body() dto: CreateOrderDto) {
        return this.svc.create(dto);
    }

    @Get('recent')
    @ApiOperation({ summary: 'List recent orders (default last 7 days)' })
    @ApiQuery({
        name: 'days',
        required: false,         // mark as optional in Swagger
        type: Number,
        description: 'Number of days to look back (default: 7)',
        example: 14,
    })
    findRecent(@Query('days') days?: number) {
        return this.svc.findRecent(days);
    }
}
