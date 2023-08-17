import { Injectable } from '@nestjs/common';
import { UpdateProductFieldDto } from './dto/update-product-field.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductField } from '../typeorm/entities/ProductField';

@Injectable()
export class ProductFieldService {
  constructor(
    @InjectRepository(ProductField)
    private productFieldRepository: Repository<ProductField>,
  ) {}

  findAll(): Promise<ProductField[]> {
    return this.productFieldRepository.find();
  }

  update(id: number, updateProductFieldDto: UpdateProductFieldDto) {
    return `This action updates a #${id} productField`;
  }

}
