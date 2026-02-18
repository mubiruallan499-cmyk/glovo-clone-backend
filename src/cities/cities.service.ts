import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';
import { Country } from '../countries/country.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepo: Repository<City>,

    @InjectRepository(Country)
    private readonly countryRepo: Repository<Country>,
  ) {}

  async create(name: string, countryId: number) {
    const country = await this.countryRepo.findOne({
      where: { id: countryId },
    });

    if (!country) {
      throw new NotFoundException('Country not found');
    }

    const city = this.cityRepo.create({
      name,
      country,
    });

    return this.cityRepo.save(city);
  }

  findAll() {
    return this.cityRepo.find({
      relations: ['country'],
    });
  }
}
