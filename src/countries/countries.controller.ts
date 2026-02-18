import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  create(@Body() body: { name: string; code: string }) {
    return this.countriesService.create(body.name, body.code);
  }

  @Get()
  findAll() {
    return this.countriesService.findAll();
  }
}
