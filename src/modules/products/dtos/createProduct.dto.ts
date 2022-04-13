import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, IsUUID, ValidateNested } from "class-validator";
import { SimpleObjectTypeDto } from './../../../shared/dtos/simpleObjectType.dto';


export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  urlImage: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  idRestaurant: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: [SimpleObjectTypeDto],
  })
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({
    each: true,
  })
  @Type(() => SimpleObjectTypeDto)
  extras: Array<{ id: string }>;
}