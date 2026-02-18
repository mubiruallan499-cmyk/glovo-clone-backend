import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ZonesService } from './zones.service';

@Controller('zones')
export class ZonesController {
  constructor(private readonly zonesService: ZonesService) {}

  @Post()
  create(@Body() body: { name: string; cityId: number }) {
    return this.zonesService.create(body);
  }

  @Get()
  findByCity(@Query('cityId') cityId: string) {
    return this.zonesService.findByCity(Number(cityId));
  }
}
