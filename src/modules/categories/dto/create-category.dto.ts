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

    @ApiProperty({ description: 'Category image - Base64 String', required: false })
    @IsOptional()
    @IsString()
    image?: string;

    @ApiProperty({ description: 'Category image Type', required: false })
    @IsOptional()
    @IsString()
    imageType?: string;

    @ApiProperty({ description: 'Category Parent', required: false })
    @IsInt()
    @IsOptional()
    parentId?: number;
}
