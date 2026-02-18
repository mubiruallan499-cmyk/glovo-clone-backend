import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { Zone } from './zone.entity';
import { City } from '../cities/city.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Zone, City]),
  ],
  controllers: [ZonesController],
  providers: [ZonesService],
})
export class ZonesModule {}
