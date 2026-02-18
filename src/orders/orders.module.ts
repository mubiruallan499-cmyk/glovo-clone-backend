import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { Vendor } from '../vendors/vendor.entity';
import { Product } from '../vendors/products/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Vendor,Product])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
