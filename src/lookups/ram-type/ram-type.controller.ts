import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RamTypeService } from './ram-type.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Controller('product-ram-type')
export class RamTypeController {
  constructor(private readonly ramTypeService: RamTypeService) {}

  @Post()
  create(@Body() createRamTypeDto: CreateLookupDto) {
    return this.ramTypeService.create(createRamTypeDto);
  }

  @Get('all')
  findAll() {
    return this.ramTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ramTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRamTypeDto: CreateLookupDto) {
    return this.ramTypeService.update(+id, updateRamTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ramTypeService.remove(+id);
  }
}
