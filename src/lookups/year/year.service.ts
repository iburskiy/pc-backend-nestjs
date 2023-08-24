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

  create(createBrandDto: CreateLookupDto) {
    return this.lookupRepository.insert(createBrandDto);
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findAllExtended() {
    const res = this.lookupRepository.query(
      `SELECT pt.id, pt.value, CASE WHEN p.model is not NULL THEN 1 ELSE 0 END AS isProductExist
       FROM lkp_product_year pt
                LEFT JOIN product p
                          ON pt.id = p.year_id and
                             p.id = (select min(id) from product where year_id = pt.id)`
    );
    return res;
  }

  update(id: number, updateBrandDto: CreateLookupDto) {
    return this.lookupRepository.update(id, updateBrandDto);
  }

  remove(id: number) {
    return this.lookupRepository.delete(id);
  }
}
