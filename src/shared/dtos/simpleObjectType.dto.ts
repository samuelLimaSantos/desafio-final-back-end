import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SimpleObjectTypeDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  id: string;
}
