import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ListExtrasService } from "./listExtras.service";

@ApiTags('products')
@Controller('products')
export class ListExtrasController {
  constructor(
    private readonly listExtrasService: ListExtrasService,
  ) {}

  @Get('/extras')
  async listExtras() {
    return await this.listExtrasService.execute();
  }
}