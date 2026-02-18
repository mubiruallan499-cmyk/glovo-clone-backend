import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './vendor.entity';
import { Area } from '../areas/area.entity'; // if you have areas

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor)
    private vendorRepository: Repository<Vendor>,

    @InjectRepository(Area) // only if using areas
    private areaRepository: Repository<Area>,
  ) {}

  async create(body: any) {
    let area = null;

    if (body.areaId) {
      const areaId = Number(body.areaId);
      if (isNaN(areaId)) {
        throw new BadRequestException('Invalid areaId');
      }

      area = await this.areaRepository.findOne({ where: { id: areaId } });
      if (!area) {
        throw new BadRequestException('Area not found');
      }
    }

    const vendor = this.vendorRepository.create({
      name: body.name,
      email: body.email,
      area: area,
    });

    return await this.vendorRepository.save(vendor);
  }

  async findAll() {
    return await this.vendorRepository.find({
      relations: ['area'],
    });
  }
}
