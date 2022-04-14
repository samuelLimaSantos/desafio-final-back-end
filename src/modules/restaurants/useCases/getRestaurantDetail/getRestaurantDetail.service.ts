import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurants } from '../../entities/restaurants.entity';

@Injectable()
export class GetRestaurantDetailService {
  constructor(
    @InjectRepository(Restaurants)
    private readonly restaurantsRepository: Repository<Restaurants>,
  ) {}

  async execute(restaurantId: string) {
    return await this.restaurantsRepository
      .createQueryBuilder('restaurant')
      .select([
        'restaurant.id', 
        'restaurant.name', 
        'restaurant.address', 
        'restaurant.urlLogo',
        'restaurant.urlCover',
        'restaurant.description',
        'restaurant.responsible',
        'products.id',
        'products.name',
        'products.urlImage',
        'products.description',
        'extras.id',
        'extras.name',
        'extras.price',
      ])
      .leftJoin('restaurant.products', 'products')
      .leftJoin('products.extras', 'extras')
      .where('restaurant.id = :restaurantId', { restaurantId })
      .getOne();
  }
}