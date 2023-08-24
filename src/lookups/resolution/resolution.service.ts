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

  create(createBrandDto: CreateLookupDto) {
    return this.lookupRepository.insert(createBrandDto);
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findAllExtended() {
    const res = this.lookupRepository.query(
      `SELECT pt.id, pt.value, CASE WHEN p.model is not NULL THEN 1 ELSE 0 END AS isProductExist
       FROM lkp_product_resolution pt
                LEFT JOIN product p
                          ON pt.id = p.resolution_id and
                             p.id = (select min(id) from product where resolution_id = pt.id)`
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
