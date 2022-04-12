import { ApiTags } from '@nestjs/swagger';
import { Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateProductService } from './createProduct.service';

@ApiTags('products')
@Controller('products')
export class CreateProductController {
  constructor(
    private createProductService: CreateProductService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct() {
    await this.createProductService.execute();
  }
}