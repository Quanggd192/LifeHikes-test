import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ required: false, type: 'string' })
  @IsOptional()
  bookId: string;

  @ApiProperty({ required: false, type: 'string' })
  @IsOptional()
  productId: string;

  @ApiProperty({ required: false, type: 'string' })
  @IsOptional()
  priceId: string;

  @ApiProperty({ required: false, type: 'string' })
  @IsOptional()
  username: string;

  @ApiProperty({ required: false, type: 'string' })
  @IsOptional()
  phone: string;

  @ApiProperty({ required: false, type: 'number' })
  @IsOptional()
  quantity: number;
}
