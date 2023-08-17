import { Injectable } from '@nestjs/common';
import { LkpProductColor } from '../../typeorm/entities/LkpProductColor';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(LkpProductColor)
    private lookupRepository: Repository<LkpProductColor>,
  ) {}

  create(createColorDto: CreateLookupDto) {
    return 'This action adds a new color';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} color`;
  }

  update(id: number, updateColorDto: CreateLookupDto) {
    return `This action updates a #${id} color`;
  }

  remove(id: number) {
    return `This action removes a #${id} color`;
  }
}
