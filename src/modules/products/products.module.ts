import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from './entities/products.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Products]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ProductsModule {}