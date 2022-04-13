import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from './entities/products.entity';
import { Extras } from './entities/extras.entity';
import { CreateProductService } from './useCases/createProduct/createProduct.service';
import { CreateProductController } from './useCases/createProduct/createProduct.controller';
import { ProductsExtras } from "./entities/productsExtras.entity";
import { ListProductsService } from './useCases/listProducts/listProducts.service';
import { ListProductsController } from './useCases/listProducts/listProducts.controller';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Products, Extras, ProductsExtras]),
  ],
  controllers: [
    CreateProductController,
    ListProductsController,
  ],
  providers: [
    CreateProductService,
    ListProductsService,
  ],
  exports: [],
})
export class ProductsModule {}