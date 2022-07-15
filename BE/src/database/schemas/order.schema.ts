import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  username: string;

  @Prop()
  phone: string;

  @Prop()
  productId: string;

  @Prop()
  priceId: string;

  @Prop()
  quantity: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
