import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Restaurants } from './entities/restaurants.entity';
import { CreateRestaurantService } from './useCases/createRestaurant/createRestaurant.service';
import { CreateRestaurantController } from './useCases/createRestaurant/createRestaurant.controller';
import { ListRestaurantsService } from './useCases/listRestaurants/listRestaurants.service';
import { ListRestaurantsController } from './useCases/listRestaurants/listRestaurants.controller';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Restaurants]),
  ],
  controllers: [
    CreateRestaurantController,
    ListRestaurantsController
  ],
  providers: [
    CreateRestaurantService,
    ListRestaurantsService
  ],
  exports: [],
})
export class RestaurantsModule {}