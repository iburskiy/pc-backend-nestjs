import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductBrand } from '../../typeorm/entities/LkpProductBrand';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductBrand])],
  controllers: [BrandController],
  providers: [BrandService]
})
export class BrandModule {}
