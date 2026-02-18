import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { Vendor } from '../vendor.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Vendor)
    private vendorRepository: Repository<Vendor>,
  ) {}

  async create(body: any) {
    const vendor = await this.vendorRepository.findOne({
      where: { id: body.vendorId },
    });

    if (!vendor) {
      throw new NotFoundException('Vendor not found');
    }

    const product = this.productRepository.create({
      name: body.name,
      price: body.price,
      vendor: vendor,
    });

    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find({
      relations: ['vendor'],
    });
  }
}
