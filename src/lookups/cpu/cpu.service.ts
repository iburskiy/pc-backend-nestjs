import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LkpProductCpu } from '../../typeorm/entities/LkpProductCpu';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class CpuService {
  constructor(
    @InjectRepository(LkpProductCpu)
    private lookupRepository: Repository<LkpProductCpu>,
  ) {}

  create(createCpuDto: CreateLookupDto) {
    return 'This action adds a new cpu';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cpu`;
  }

  update(id: number, updateCpuDto: CreateLookupDto) {
    return `This action updates a #${id} cpu`;
  }

  remove(id: number) {
    return `This action removes a #${id} cpu`;
  }
}
