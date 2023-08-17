import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Controller('product-cpu')
export class CpuController {
  constructor(private readonly cpuService: CpuService) {}

  @Post()
  create(@Body() createCpuDto: CreateLookupDto) {
    return this.cpuService.create(createCpuDto);
  }

  @Get('all')
  findAll() {
    return this.cpuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cpuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCpuDto: CreateLookupDto) {
    return this.cpuService.update(+id, updateCpuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cpuService.remove(+id);
  }
}
