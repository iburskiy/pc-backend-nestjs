import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LkpProductRamType } from '../../typeorm/entities/LkpProductRamType';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class RamTypeService {
  constructor(
    @InjectRepository(LkpProductRamType)
    private lookupRepository: Repository<LkpProductRamType>,
  ) {}

  create(createRamTypeDto: CreateLookupDto) {
    return 'This action adds a new ramType';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ramType`;
  }

  update(id: number, updateRamTypeDto: CreateLookupDto) {
    return `This action updates a #${id} ramType`;
  }

  remove(id: number) {
    return `This action removes a #${id} ramType`;
  }
}
