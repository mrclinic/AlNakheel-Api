import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRelatedProductDto {
    @ApiProperty({ description: 'The main product ID' })
    @IsInt()
    productId: number;

    @ApiProperty({ description: 'The related product ID' })
    @IsInt()
    relatedId: number;
}
