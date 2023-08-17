import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LkpProductGraphics } from '../../typeorm/entities/LkpProductGraphics';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class GraphicsService {
  constructor(
    @InjectRepository(LkpProductGraphics)
    private lookupRepository: Repository<LkpProductGraphics>,
  ) {}

  create(createGraphicDto: CreateLookupDto) {
    return 'This action adds a new graphic';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} graphic`;
  }

  update(id: number, updateGraphicDto: CreateLookupDto) {
    return `This action updates a #${id} graphic`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphic`;
  }
}
