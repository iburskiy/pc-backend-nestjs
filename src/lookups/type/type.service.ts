import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LkpProductType } from '../../typeorm/entities/LkpProductType';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(LkpProductType)
    private lookupRepository: Repository<LkpProductType>,
  ) {}

  create(createTypeDto: CreateLookupDto) {
    return 'This action adds a new type';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeDto: CreateLookupDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
