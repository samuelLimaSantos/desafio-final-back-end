import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GetRestaurantDetailService } from "./getRestaurantDetail.service";

@ApiTags('restaurants')
@Controller('restaurants')
export class GetRestaurantDetailController {

  constructor(
    private readonly getRestaurantDetailService: GetRestaurantDetailService,
  ) {}

  @Get('/:id')
  async getRestaurantDetail(@Param('id') restaurantId: string) {
    return await this.getRestaurantDetailService.execute(restaurantId);
  }
}