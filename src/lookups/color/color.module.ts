import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductColor } from '../../typeorm/entities/LkpProductColor';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductColor])],
  controllers: [ColorController],
  providers: [ColorService]
})
export class ColorModule {}
