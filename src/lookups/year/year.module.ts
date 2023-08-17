import { Module } from '@nestjs/common';
import { YearService } from './year.service';
import { YearController } from './year.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductYear } from '../../typeorm/entities/LkpProductYear';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductYear])],
  controllers: [YearController],
  providers: [YearService]
})
export class YearModule {}
