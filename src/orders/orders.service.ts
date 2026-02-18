import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { Vendor } from '../vendors/vendor.entity';
import { Product } from '../vendors/products/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,

    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,

    @InjectRepository(Vendor)
    private vendorRepository: Repository<Vendor>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createOrder(vendorId: number, items: any[]) {
    const vendor = await this.vendorRepository.findOne({
      where: { id: vendorId },
    });

    if (!vendor) throw new NotFoundException('Vendor not found');

    let totalAmount = 0;

    const order = this.orderRepository.create({
      vendor,
      status: 'PENDING',
      totalAmount: 0,
    });

    const savedOrder = await this.orderRepository.save(order);

    for (const item of items) {
      const product = await this.productRepository.findOne({
        where: { id: item.productId },
      });

      if (!product) throw new NotFoundException('Product not found');

      const itemTotal = Number(product.price) * item.quantity;
      totalAmount += itemTotal;

      const orderItem = this.orderItemRepository.create({
        order: savedOrder,
        product,
        quantity: item.quantity,
        price: product.price,
      });

      await this.orderItemRepository.save(orderItem);
    }

    savedOrder.totalAmount = totalAmount;
    return this.orderRepository.save(savedOrder);
  }
}
