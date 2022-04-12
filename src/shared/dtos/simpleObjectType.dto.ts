import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class SimpleObjectTypeDto {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  id: number;
}
