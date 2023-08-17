import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Controller('product-type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  create(@Body() createTypeDto: CreateLookupDto) {
    return this.typeService.create(createTypeDto);
  }

  @Get('all')
  findAll() {
    return this.typeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeDto: CreateLookupDto) {
    return this.typeService.update(+id, updateTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeService.remove(+id);
  }
}
