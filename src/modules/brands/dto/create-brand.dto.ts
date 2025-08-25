import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateBrandDto {
    @ApiProperty({ description: 'English Brand name' })
    @IsString()
    name_en: string;

    @ApiProperty({ description: 'Arabic Brand name' })
    @IsString()
    name_ar: string;

    @ApiProperty({ description: 'English Brand description', required: false })
    @IsOptional()
    @IsString()
    description_en?: string;

    @ApiProperty({ description: 'Arabic Brand description', required: false })
    @IsOptional()
    @IsString()
    description_ar?: string;

    @ApiProperty({ description: 'Brand imageUrl', required: false })
    @IsOptional()
    @IsString()
    imageUrl?: string;
}
