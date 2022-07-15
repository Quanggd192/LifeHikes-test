import { ConfigService } from './config.service';
import { Stripe } from 'stripe';

export class StripeService {
  private readonly stripeConnection = new Stripe(
    this.configService.stripe.secretKey,
    {
      apiVersion: '2020-08-27',
    },
  );
  constructor(private configService: ConfigService) {}

  async createProduct(name: string) {
    return await this.stripeConnection.products.create({
      name,
    });
  }

  async createPrice({ unitAmount = 0, productId = '' }) {
    return await this.stripeConnection.prices.create({
      currency: 'usd',
      unit_amount: unitAmount,
      product: productId,
    });
  }

  async createPaymentLink({ quantity = 0, priceId = '' }) {
    return await this.stripeConnection.paymentLinks.create({
      line_items: [{ price: priceId, quantity }],
    });
  }
}
