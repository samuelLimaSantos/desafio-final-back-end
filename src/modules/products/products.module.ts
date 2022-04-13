import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from './entities/products.entity';
import { Extras } from './entities/extras.entity';
import { CreateProductService } from './useCases/createProduct/createProduct.service';
import { CreateProductController } from './useCases/createProduct/createProduct.controller';
import { ProductsExtras } from "./entities/productsExtras.entity";
import { ListExtrasService } from './useCases/listExtras/listExtras.service';
import { ListExtrasController } from './useCases/listExtras/listExtras.controller';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Products, Extras, ProductsExtras]),
  ],
  controllers: [
    CreateProductController,
    ListExtrasController,
  ],
  providers: [
    CreateProductService,
    ListExtrasService
  ],
  exports: [],
})
export class ProductsModule {}