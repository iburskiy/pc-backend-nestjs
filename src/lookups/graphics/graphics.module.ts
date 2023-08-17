import { Module } from '@nestjs/common';
import { GraphicsService } from './graphics.service';
import { GraphicsController } from './graphics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductGraphics } from '../../typeorm/entities/LkpProductGraphics';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductGraphics])],
  controllers: [GraphicsController],
  providers: [GraphicsService]
})
export class GraphicsModule {}
