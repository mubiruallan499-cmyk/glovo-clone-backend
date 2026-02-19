import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  // Create a new payment
  async create(data: {
    userId: number;
    amount: number;
    method: string;
  }): Promise<Payment> {
    const payment = this.paymentRepository.create(data);
    return this.paymentRepository.save(payment);
  }

  // Get all payments
  async findAll(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }

  // Get a payment by ID
  async findOne(id: number): Promise<Payment> {
    return this.paymentRepository.findOneBy({ id });
  }
}