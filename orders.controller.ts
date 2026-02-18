import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAllOrders() {
    return {
      message: 'Orders endpoint working',
    };
  }
}
