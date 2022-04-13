import { Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { Restaurants } from '../../entities/restaurants.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListRestaurantsService {
  constructor(
    @InjectRepository(Restaurants)
    private restaurantsRepository: Repository<Restaurants>
  ) { }

  async execute() {
    return await this.restaurantsRepository.find({
      select: ['id', 'name', 'address', 'urlLogo'],
    });
  }
}