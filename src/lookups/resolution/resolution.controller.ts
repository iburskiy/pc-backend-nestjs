import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResolutionService } from './resolution.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Controller('product-resolution')
export class ResolutionController {
  constructor(private readonly resolutionService: ResolutionService) {}

  @Post()
  create(@Body() createResolutionDto: CreateLookupDto) {
    return this.resolutionService.create(createResolutionDto);
  }

  @Get('all')
  findAll() {
    return this.resolutionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resolutionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResolutionDto: CreateLookupDto) {
    return this.resolutionService.update(+id, updateResolutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resolutionService.remove(+id);
  }
}
