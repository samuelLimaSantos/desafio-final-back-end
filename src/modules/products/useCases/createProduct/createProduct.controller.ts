import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateProductService } from './createProduct.service';
import { CreateProductDto } from './../../dtos/createProduct.dto';

@ApiTags('products')
@Controller('products')
export class CreateProductController {
  constructor(
    private createProductService: CreateProductService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(
    @Body() createProductDto: CreateProductDto
  ) {
    await this.createProductService.execute(createProductDto);
  }
}