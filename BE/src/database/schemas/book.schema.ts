import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  categoryId: string;

  @Prop()
  price: number;

  @Prop()
  productId: string;

  @Prop()
  priceId: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
