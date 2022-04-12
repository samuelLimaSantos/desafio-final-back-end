import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Restaurants } from './entities/restaurants.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Restaurants]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RestaurantsModule {}