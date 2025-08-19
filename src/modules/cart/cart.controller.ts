import { Controller, Post, Body, UseGuards, Request, Get, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private svc: CartService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('add')
  @ApiOperation({ summary: 'Add item to cart' })
  add(@Request() req, @Body() body: { productId: number; qty?: number }) {
    return this.svc.addToCart(req.user.userId, body.productId, body.qty || 1);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({ summary: 'Get current user cart' })
  get(@Request() req) {
    return this.svc.getCart(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch('update')
  @ApiOperation({ summary: 'Update cart item quantity' })
  update(@Request() req, @Body() body: { productId: number; qty: number }) {
    return this.svc.updateQty(req.user.userId, body.productId, body.qty);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':productId')
  @ApiOperation({ summary: 'Remove item from cart' })
  remove(@Request() req, @Param('productId', ParseIntPipe) productId: number) {
    return this.svc.remove(req.user.userId, productId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('checkout')
  @ApiOperation({ summary: 'Checkout cart (decrement stock)' })
  checkout(@Request() req) {
    return this.svc.checkout(req.user.userId);
  }
}
