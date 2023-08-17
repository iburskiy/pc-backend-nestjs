import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductCpu } from '../../typeorm/entities/LkpProductCpu';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductCpu])],
  controllers: [CpuController],
  providers: [CpuService]
})
export class CpuModule {}
