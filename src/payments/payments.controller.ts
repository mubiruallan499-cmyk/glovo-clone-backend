
import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment } from './payment.entity';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  async create(@Body() body: { userId: number; amount: number; method: string }) {
    try {
      const payment = await this.paymentsService.create(body);
      return { message: 'payment created', data: payment };
    } catch (error) {
      console.error(error); // Important for debugging
      throw error;
    }
  }
}