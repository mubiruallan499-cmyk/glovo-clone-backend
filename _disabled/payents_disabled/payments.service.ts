import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payment, PaymentMethod, PaymentStatus } from './payment.entity';
import { Order } from '../orders/order.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepo: Repository<Payment>,

    @InjectRepository(Order)
    private readonly ordersRepo: Repository<Order>,
  ) {}

  async createPayment(
    orderId: number,
    amount: number,
    method: PaymentMethod,
  ): Promise<Payment> {
    const order = await this.ordersRepo.findOne({
      where: { id: orderId },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const payment = this.paymentsRepo.create({
      order,
      amount,
      method,
      status: PaymentStatus.SUCCESS,
    });

    return this.paymentsRepo.save(payment);
  }
}
