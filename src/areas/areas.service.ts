import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './area.entity';
import { Zone } from '../zones/zone.entity';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)
    private areaRepo: Repository<Area>,

    @InjectRepository(Zone)
    private zoneRepo: Repository<Zone>,
  ) {}

  async create(data: { name: string; zoneId: number }) {
    const zone = await this.zoneRepo.findOne({
      where: { id: data.zoneId },
    });

    if (!zone) {
      throw new Error('Zone not found');
    }

    const area = this.areaRepo.create({
      name: data.name,
      zone,
    });

    return this.areaRepo.save(area);
  }

  findByZone(zoneId: number) {
    return this.areaRepo.find({
      where: { zone: { id: zoneId } },
    });
  }
}
