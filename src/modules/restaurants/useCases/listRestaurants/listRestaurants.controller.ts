import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from "@nestjs/common";
import { ListRestaurantsService } from './listRestaurants.service';

@ApiTags('restaurants')
@Controller('restaurants')
export class ListRestaurantsController {
  constructor(
    private readonly listRestaurantsService: ListRestaurantsService,
  ) {}

  @Get()
  async listRestaurants() {
    return await this.listRestaurantsService.execute();
  }
}