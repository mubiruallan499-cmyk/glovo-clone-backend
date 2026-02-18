import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Vendor } from '../vendors/vendor.entity';
import { Product } from '../vendors/products/product.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('create-test')
  async createTestOrder() {
    // Hardcoded test data
    const vendor = new Vendor();
    vendor.id = 1; // Make sure this vendor exists in your DB

    const product = new Product();
    product.id = 1; // Make sure this product exists in your DB
    product.price = 10000;

    // Order items
    const items = [
      {
        product,
        quantity: 2,
        price: product.price,
      },
    ];

    const order = await this.ordersService.createOrder(vendor.id, items);
    return order;
  }
}
