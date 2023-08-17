import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColorService } from './color.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Controller('product-color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Post()
  create(@Body() createColorDto: CreateLookupDto) {
    return this.colorService.create(createColorDto);
  }

  @Get('all')
  findAll() {
    return this.colorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColorDto: CreateLookupDto) {
    return this.colorService.update(+id, updateColorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colorService.remove(+id);
  }
}
