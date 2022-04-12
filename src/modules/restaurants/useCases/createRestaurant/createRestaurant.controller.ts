import { Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateRestaurantService } from './createRestaurant.service';

@Controller('restaurants')
export class CreateRestaurantController {
  constructor(
    private createRestaurantService: CreateRestaurantService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createRestaurant() {
    await this.createRestaurantService.execute();
  }
}