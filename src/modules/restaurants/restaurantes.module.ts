import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Restaurants } from './entities/restaurants.entity';
import { CreateRestaurantService } from './useCases/createRestaurant/createRestaurant.service';
import { CreateRestaurantController } from './useCases/createRestaurant/createRestaurant.controller';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Restaurants]),
  ],
  controllers: [
    CreateRestaurantController
  ],
  providers: [
    CreateRestaurantService
  ],
  exports: [],
})
export class RestaurantsModule {}