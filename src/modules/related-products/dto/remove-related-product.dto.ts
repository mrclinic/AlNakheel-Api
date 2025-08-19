import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class RemoveRelatedProductDto {
    @ApiProperty({ description: 'The main product ID' })
    @IsInt()
    productId: number;

    @ApiProperty({ description: 'The related product ID to remove' })
    @IsInt()
    relatedId: number;
}