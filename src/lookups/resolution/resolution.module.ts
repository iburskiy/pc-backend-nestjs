import { Module } from '@nestjs/common';
import { ResolutionService } from './resolution.service';
import { ResolutionController } from './resolution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductResolution } from '../../typeorm/entities/LkpProductResolution';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductResolution])],
  controllers: [ResolutionController],
  providers: [ResolutionService]
})
export class ResolutionModule {}
