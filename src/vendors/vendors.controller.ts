import { Controller, Get } from '@nestjs/common';
import { VendorsService } from './vendors.service';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  // TEMPORARY TEST ROUTE — creates a vendor when you open in browser
  @Get('create-test')
  async createTest() {
    return this.vendorsService.create({
      name: 'Kampala Restaurant',
      email: 'kampala@test.com',
      areaId: null, // Change to 1 if you have an existing area
    });
  }

  // GET all vendors
  @Get()
  async findAll() {
    return this.vendorsService.findAll();
  }
}
