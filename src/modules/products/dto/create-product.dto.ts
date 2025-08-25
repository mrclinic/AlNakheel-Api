import { IsString, IsOptional, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'English Product name' })
  @IsString()
  name_en: string;

  @ApiProperty({ description: 'Arabic Product name' })
  @IsString()
  name_ar: string;

  @ApiProperty({ description: 'English Product description', required: false })
  @IsOptional()
  @IsString()
  description_en?: string;

  @ApiProperty({ description: 'Arabic Product description', required: false })
  @IsOptional()
  @IsString()
  description_ar?: string;

  @ApiProperty({ description: 'Product Price' })
  @IsInt()
  price: number;

  @ApiProperty({ description: 'Product imageUrl', required: false })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({ description: 'Product Category', required: false })
  @IsOptional()
  categoryId?: number;

  @ApiProperty({ description: 'Product Brand', required: false })
  @IsOptional()
  brandId?: number;
}
