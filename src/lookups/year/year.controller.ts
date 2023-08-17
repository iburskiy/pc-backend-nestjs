import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YearService } from './year.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Controller('product-year')
export class YearController {
  constructor(private readonly yearService: YearService) {}

  @Post()
  create(@Body() createYearDto: CreateLookupDto) {
    return this.yearService.create(createYearDto);
  }

  @Get('all')
  findAll() {
    return this.yearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.yearService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYearDto: CreateLookupDto) {
    return this.yearService.update(+id, updateYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yearService.remove(+id);
  }
}
