import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductType } from '../../typeorm/entities/LkpProductType';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductType])],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule {}
