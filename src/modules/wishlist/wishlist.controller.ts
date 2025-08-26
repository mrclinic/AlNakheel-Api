import { Controller, Post, UseGuards, Request, Get, Delete, Param, ParseIntPipe, Body } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('wishlist')
@Controller('wishlist')
export class WishlistController {
  constructor(private svc: WishlistService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('add')
  @ApiOperation({ summary: 'Add to wishlist' })
  add(@Request() req, @Body() body: { productId: number }) {
    return this.svc.add(req.user.userId, body.productId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({ summary: 'List wishlist' })
  list(@Request() req) {
    return this.svc.list(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':productId')
  @ApiOperation({ summary: 'Remove from wishlist' })
  remove(@Request() req, @Param('productId', ParseIntPipe) productId: number) {
    return this.svc.remove(req.user.userId, productId);
  }
}
