import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Zone } from './zone.entity';
import { City } from '../cities/city.entity';

@Injectable()
export class ZonesService {
  constructor(
    @InjectRepository(Zone)
    private zoneRepo: Repository<Zone>,

    @InjectRepository(City)
    private cityRepo: Repository<City>,
  ) {}

  async create(data: { name: string; cityId: number }) {
    const city = await this.cityRepo.findOne({
      where: { id: data.cityId },
    });

    if (!city) {
      throw new Error('City not found');
    }

    const zone = this.zoneRepo.create({
      name: data.name,
      city,
    });

    return this.zoneRepo.save(zone);
  }   // ✅ THIS WAS MISSING

  async findByCity(cityId: number) {
    return this.zoneRepo.find({
      where: {
        city: { id: cityId },
      },
    });
  }
}
