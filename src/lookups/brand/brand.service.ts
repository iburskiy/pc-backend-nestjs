import { Injectable } from '@nestjs/common';
import { LkpProductBrand } from '../../typeorm/entities/LkpProductBrand';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(LkpProductBrand)
    private lookupRepository: Repository<LkpProductBrand>,
  ) {}

  create(createBrandDto: CreateLookupDto) {
    return 'This action adds a new brand';
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: CreateLookupDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
