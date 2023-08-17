import { Module } from '@nestjs/common';
import { OsService } from './os.service';
import { OsController } from './os.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LkpProductOs } from '../../typeorm/entities/LkpProductOs';

@Module({
  imports: [TypeOrmModule.forFeature([LkpProductOs])],
  controllers: [OsController],
  providers: [OsService]
})
export class OsModule {}
