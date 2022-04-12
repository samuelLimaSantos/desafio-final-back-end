import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dtos/createProduct.dto';

@Injectable()
export class CreateProductService {
  constructor() {}

  async execute(createProductDto: CreateProductDto) {}
}