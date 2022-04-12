import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRestaurantDto } from "../../dtos/createRestaurant.dto";
import { Restaurants } from './../../entities/restaurants.entity';

@Injectable()
export class CreateRestaurantService {
  constructor(
    @InjectRepository(Restaurants)
    private restaurantsRepository: Repository<Restaurants>
  ) {}

  async execute(createRestaurantDto: CreateRestaurantDto) {
    const restaurantAlreadyRegistered = await this.restaurantsRepository
      .findOne({
        where: {
          name: createRestaurantDto.name,
        }
      });

    if (restaurantAlreadyRegistered)  
      throw new HttpException(
        'Restaurant already registered', 
        HttpStatus.BAD_REQUEST
      );

    const restaurant = this.restaurantsRepository.create(createRestaurantDto);

    await this.restaurantsRepository.save(restaurant);
  }
}