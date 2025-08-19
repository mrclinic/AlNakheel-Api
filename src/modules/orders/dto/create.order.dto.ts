import { IsString, IsNotEmpty, IsArray, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderDto {

    @ApiProperty({ description: 'Buyer First Name' })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ description: 'Buyer Last Name' })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ description: 'Buyer Phone Number' })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        description: 'Order Items',
        type: () => [CreateOrderItemDto],  // tell Swagger it's an array of objects
        example: [
            { productId: 101, quantity: 2 },
            { productId: 205, quantity: 1 },
        ],
    })
    @IsArray()
    @ValidateNested({ each: true })
    items: CreateOrderItemDto[];
}

export class CreateOrderItemDto {

    @ApiProperty({ description: 'Product Id' })
    @IsInt()
    @IsNotEmpty()
    productId: number;

    @ApiProperty({ description: 'Quantity' })
    @IsInt()
    @IsNotEmpty()
    quantity: number;
}
