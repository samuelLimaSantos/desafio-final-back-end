import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from './entities/products.entity';
import { Extras } from './entities/extras.entity';
import { CreateProductService } from './useCases/createProduct/createProduct.service';
import { CreateProductController } from './useCases/createProduct/createProduct.controller';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Products, Extras]),
  ],
  controllers: [
    CreateProductController,
  ],
  providers: [
    CreateProductService
  ],
  exports: [],
})
export class ProductsModule {}