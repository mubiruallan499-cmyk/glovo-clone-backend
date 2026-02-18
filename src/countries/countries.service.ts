import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepo: Repository<Country>,
  ) {}

  create(name: string, code: string) {
    const country = this.countryRepo.create({ name, code });
    return this.countryRepo.save(country);
  }

  findAll() {
    return this.countryRepo.find({
      where: { isActive: true },
      order: { name: 'ASC' },
    });
  }
}
