import { Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { Extras } from '../../entities/extras.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListExtrasService {
  constructor(
    @InjectRepository(Extras)
    private extrasRepository: Repository<Extras>
  ) {}

  async execute() {
    return await this.extrasRepository.find({
      select: ['id', 'name', 'price'],
    });
  }
}