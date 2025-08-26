import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsInt } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class RelatedProductDto extends CreateProductDto {
    @ApiProperty({ description: 'ID of the related product' })
    @Type(() => Number)
    id: number;
}

export class AddRelatedProductsBulkDto {
    @ApiProperty({ description: 'The main product ID' })
    @IsInt()
    productId: number;

    @ApiProperty({ description: 'List of related product IDs to add', type: [Number] })
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    relatedIds: number[];
}