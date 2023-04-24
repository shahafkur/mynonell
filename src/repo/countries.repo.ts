import { Repository } from 'typeorm';
import { Mcountry } from '../entity/mcountry';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountriesRepo {
  constructor(
    @InjectRepository(Mcountry) private readonly repo: Repository<Mcountry>,
  ) {}
  async updatData(mconry: Mcountry) {
    await this.repo.save(mconry);
  }
  async getData() {
    return await this.repo.find();
  }
}
