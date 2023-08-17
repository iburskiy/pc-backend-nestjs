import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LkpProductOs } from '../../typeorm/entities/LkpProductOs';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class OsService {
  constructor(
    @InjectRepository(LkpProductOs)
    private lookupRepository: Repository<LkpProductOs>,
  ) {}

  create(createODto: CreateLookupDto) {
    return 'This action adds a new o';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} o`;
  }

  update(id: number, updateODto: CreateLookupDto) {
    return `This action updates a #${id} o`;
  }

  remove(id: number) {
    return `This action removes a #${id} o`;
  }
}
