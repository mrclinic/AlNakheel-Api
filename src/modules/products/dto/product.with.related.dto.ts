import { ApiExtraModels, ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { RelatedProductDto } from "./related-product.dto";
import { ArrayNotEmpty, IsArray, IsBoolean, IsIn, IsInt, IsOptional, IsString, Min } from "class-validator";
import { Transform, Type } from "class-transformer";
import { CreateProductDto } from "./create-product.dto";

/* export class ProductWithRelatedDto {
    @ApiProperty({ description: 'Product ID' })
    id: number;

    @ApiProperty({ description: 'Product name' })
    name: string;

    @ApiProperty({ description: 'Product description', required: false })
    description?: string;

    @ApiProperty({ description: 'Product price' })
    price: number;

    @ApiProperty({ description: 'Stock quantity' })
    stock: number;

    @ApiProperty({ type: [RelatedProductDto], description: 'List of related products' })
    relatedProducts: RelatedProductDto[];
} */

export class RemoveRelatedProductsBulkDto {
    @ApiProperty({ description: 'The main product ID' })
    @IsInt()
    productId: number;

    @ApiProperty({ description: 'List of related product IDs to remove', type: [Number] })
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    relatedIds: number[];
}

@ApiExtraModels(RelatedProductDto)
export class ProductWithRelatedDto extends CreateProductDto {
    @ApiProperty({ description: 'Product ID' })
    @Type(() => Number)
    id: number;

    @ApiProperty({ type: [RelatedProductDto], description: 'List of related products' })
    relatedProducts: RelatedProductDto[];

    @ApiProperty({
        description: 'Endpoints available for bulk operations on related products',
        example: {
            addBulk: 'POST /products/related/bulk',
            removeBulk: 'DELETE /products/related/bulk',
        },
    })
    bulkOperations?: Record<string, string>;
}

export class ProductFilterQueryDto {
    // Pagination
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    @ApiProperty({ description: 'Number of records to skip', required: false })
    skip: number = 0;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @ApiProperty({ description: 'Number of records to take', required: false })
    take: number = 10;

    // Sorting
    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Field name to sort by', required: false })
    sortField?: string;

    @IsOptional()
    @IsIn(['asc', 'desc'])
    @ApiProperty({ description: 'Sort direction', enum: ['asc', 'desc'], required: false })
    sortOrder: 'asc' | 'desc' = 'asc';

    // Filters
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @ApiProperty({ description: 'Minimum price', required: false })
    price__gte?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @ApiProperty({ description: 'Maximum price', required: false })
    price__lte?: number;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Comma-separated category IDs', required: false })
    categoryId__in?: string;

    // Brand filter
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @ApiProperty({ description: 'Filter by brand ID', required: false })
    brandId__eq?: number;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Search using keyword', required: false })
    search?: string;

    @ApiPropertyOptional({
        description: 'An optional boolean parameter',
        type: Boolean,
        example: false,
    })
    @Transform(({ value }) => value === 'true' || value === true || value === 1 || value === '1')
    @IsBoolean()
    @ApiProperty({ description: 'Search using hasOffer', required: false })
    hasOffer__eq?: boolean;
}