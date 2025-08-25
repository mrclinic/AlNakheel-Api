import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateCategoryDto {
    @ApiProperty({ description: 'English Category name' })
    @IsString()
    name_en: string;

    @ApiProperty({ description: 'Arabic Category name' })
    @IsString()
    name_ar: string;

    @ApiProperty({ description: 'English Category description', required: false })
    @IsOptional()
    @IsString()
    description_en?: string;

    @ApiProperty({ description: 'Arabic Category description', required: false })
    @IsOptional()
    @IsString()
    description_ar?: string;

    @ApiProperty({ description: 'Category imageUrl', required: false })
    @IsOptional()
    @IsString()
    imageUrl?: string;

    @ApiProperty({ description: 'Category Parent', required: false })
    @IsInt()
    @IsOptional()
    parentId?: number;
}
