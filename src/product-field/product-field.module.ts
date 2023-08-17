import { Module } from '@nestjs/common';
import { ProductFieldService } from './product-field.service';
import { ProductFieldController } from './product-field.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductField } from '../typeorm/entities/ProductField';

@Module({
  imports: [TypeOrmModule.forFeature([ProductField])],
  controllers: [ProductFieldController],
  providers: [ProductFieldService]
})
export class ProductFieldModule {}
