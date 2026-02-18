
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { Vendor } from './vendor.entity';
import { Area } from '../areas/area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor, Area])],
  providers: [VendorsService],
  controllers: [VendorsController],
})
export class VendorsModule {}
