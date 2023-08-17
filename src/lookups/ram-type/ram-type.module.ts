import { Module } from '@nestjs/common';
import { RamTypeService } from './ram-type.service';
import { RamTypeController } from './ram-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductRamType } from '../../typeorm/entities/LkpProductRamType';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductRamType])],
  controllers: [RamTypeController],
  providers: [RamTypeService]
})
export class RamTypeModule {}
