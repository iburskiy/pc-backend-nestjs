import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LkpProductYear } from '../../typeorm/entities/LkpProductYear';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class YearService {
  constructor(
    @InjectRepository(LkpProductYear)
    private lookupRepository: Repository<LkpProductYear>,
  ) {}

  create(createYearDto: CreateLookupDto) {
    return 'This action adds a new year';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} year`;
  }

  update(id: number, updateYearDto: CreateLookupDto) {
    return `This action updates a #${id} year`;
  }

  remove(id: number) {
    return `This action removes a #${id} year`;
  }
}
