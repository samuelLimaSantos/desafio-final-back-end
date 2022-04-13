import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dtos/createProduct.dto';
import { Products } from '../../entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateProductService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  async execute(createProductDto: CreateProductDto) {
    const productAlreadyExists = await this.productsRepository
      .findOne({
        where: { name: createProductDto.name, idRestaurant: createProductDto.idRestaurant },
      });

    if (productAlreadyExists)  
      throw new HttpException(
        'Product already registered is this restaurant', 
        HttpStatus.BAD_REQUEST
      );

    const product = this.productsRepository.create({
      name: createProductDto.name,
      idRestaurant: createProductDto.idRestaurant,
      price: createProductDto.price,
      description: createProductDto.description,
      urlImage: createProductDto.urlImage,
      productsExtras: createProductDto.extras.map((extra) => ({
        idExtra: extra.id,
      })),
    });

    await this.productsRepository.save(product);
  }
}