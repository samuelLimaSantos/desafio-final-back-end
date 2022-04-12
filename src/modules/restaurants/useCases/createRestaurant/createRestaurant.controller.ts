import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateRestaurantService } from './createRestaurant.service';
import { CreateRestaurantDto } from './../../dtos/createRestaurant.dto';
import { ApiTags } from "@nestjs/swagger";

@Controller('restaurants')
@ApiTags('restaurants')
export class CreateRestaurantController {
  constructor(
    private createRestaurantService: CreateRestaurantService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto) {
    await this.createRestaurantService.execute(createRestaurantDto);
  }
}