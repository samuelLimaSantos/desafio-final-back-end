import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from "@nestjs/common";
import { ListProductsService } from './listProducts.service';

@ApiTags('products')
@Controller('products')
export class ListProductsController {
  constructor(
    private readonly listProductsService: ListProductsService,
  ) {}

  @Get()
  async listProducts() {
    return await this.listProductsService.execute();
  }
}