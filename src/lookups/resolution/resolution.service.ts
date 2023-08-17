import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LkpProductResolution } from '../../typeorm/entities/LkpProductResolution';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class ResolutionService {
  constructor(
    @InjectRepository(LkpProductResolution)
    private lookupRepository: Repository<LkpProductResolution>,
  ) {}

  create(createResolutionDto: CreateLookupDto) {
    return 'This action adds a new resolution';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} resolution`;
  }

  update(id: number, updateResolutionDto: CreateLookupDto) {
    return `This action updates a #${id} resolution`;
  }

  remove(id: number) {
    return `This action removes a #${id} resolution`;
  }
}
