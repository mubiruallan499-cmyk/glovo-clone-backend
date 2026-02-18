import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AreasService } from './areas.service';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Post()
  create(@Body() body: { name: string; zoneId: number }) {
    return this.areasService.create(body);
  }

  @Get()
  findByZone(@Query('zoneId') zoneId: string) {
    return this.areasService.findByZone(Number(zoneId));
  }
}
