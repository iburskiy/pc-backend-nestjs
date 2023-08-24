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

  create(createBrandDto: CreateLookupDto) {
    return this.lookupRepository.insert(createBrandDto);
  }

  findAll() {
    return this.lookupRepository.find();
  }

  findAllExtended() {
    const res = this.lookupRepository.query(
      `SELECT pt.id, pt.value, CASE WHEN p.model is not NULL THEN 1 ELSE 0 END AS isProductExist
       FROM lkp_product_cpu pt
                LEFT JOIN product p
                          ON pt.id = p.cpu_id and
                             p.id = (select min(id) from product where cpu_id = pt.id)`
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
