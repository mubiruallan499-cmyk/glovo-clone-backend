
import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentMethod } from './payment.entity';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  async createPayment(
    @Body('orderId') orderId: number,
    @Body('amount') amount: number,
    @Body('method') method: PaymentMethod,
  ) {
    return this.paymentsService.createPayment(
      orderId,
      amount,
      method,
    );
  }
}
