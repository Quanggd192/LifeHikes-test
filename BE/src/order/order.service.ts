import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StripeService } from '../common/services/stripe.service';
import { Order, OrderDocument } from '../database/schemas/order.schema';
import { CreateOrderDto } from './dtos/create-order.dto';
import { Book, BookDocument } from '../database/schemas/book.schema';
@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>,
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private stripeService: StripeService,
  ) {}

  async getPaymentLink(orderId: string) {
    const order = await this.orderModel.findOne({ _id: orderId });
    if (order) {
      return await this.stripeService.createPaymentLink({
        quantity: order.quantity,
        priceId: order.priceId,
      });
    }
  }

  async createOrder(data: any) {
    try {
      const book = await this.bookModel.findOne({ _id: data.order.bookId });
      const orderObj: CreateOrderDto = {
        bookId: book._id,
        priceId: book.priceId,
        productId: book.productId,
        username: data.username,
        phone: data.phone,
        quantity: 1,
      };
      const order = await this.orderModel.create(orderObj);
      await order.save();
      let res = await this.getPaymentLink(order._id);
      return res;
    } catch (error) {
      return {
        status: 'failed',
        data: null,
      };
    }
  }
}
