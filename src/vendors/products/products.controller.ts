import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('create-test')
  createTest() {
    return this.productsService.create({
      name: 'Test Product',
      price: 10000,
    });
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}

