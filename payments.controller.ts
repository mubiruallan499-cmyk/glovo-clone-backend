import { Controller, Get } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  @Get()
  getAllPayments() {
    return {
      message: 'Payments endpoint working',
    };
  }
}
