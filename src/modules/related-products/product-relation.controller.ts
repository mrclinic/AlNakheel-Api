import { Controller, Post, Delete, Param, Body, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProductRelationService } from './product-relation.service';
import { AddRelatedProductDto } from './dto/create-related-product.dto';
import { RemoveRelatedProductDto } from './dto/remove-related-product.dto';

@ApiTags('RelatedProducts')
@Controller('RelatedProducts')
export class ProductRelationController {
    constructor(private readonly service: ProductRelationService) { }

    @Post('related')
    @ApiOperation({ summary: 'Add a related product to a product' })
    @ApiResponse({ status: 201, description: 'Related product added successfully.' })
    addRelated(@Body() dto: AddRelatedProductDto) {
        return this.service.addRelatedProduct(dto);
    }

    @Delete('related')
    @ApiOperation({ summary: 'Remove a related product from a product' })
    @ApiResponse({ status: 200, description: 'Related product removed successfully.' })
    removeRelated(@Body() dto: RemoveRelatedProductDto) {
        return this.service.removeRelatedProduct(dto);
    }

    @Get(':id/related')
    @ApiOperation({ summary: 'Get all related products of a product' })
    @ApiParam({ name: 'id', description: 'Product ID' })
    @ApiResponse({ status: 200, description: 'List of related products.' })
    getRelated(@Param('id', ParseIntPipe) id: number) {
        return this.service.getRelatedProducts(id);
    }
}
