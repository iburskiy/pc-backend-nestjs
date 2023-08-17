import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OsService } from './os.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Controller('product-os')
export class OsController {
  constructor(private readonly osService: OsService) {}

  @Post()
  create(@Body() createODto: CreateLookupDto) {
    return this.osService.create(createODto);
  }

  @Get('all')
  findAll() {
    return this.osService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.osService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateODto: CreateLookupDto) {
    return this.osService.update(+id, updateODto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.osService.remove(+id);
  }
}
