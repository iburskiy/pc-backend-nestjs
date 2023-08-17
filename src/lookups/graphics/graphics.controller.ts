import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GraphicsService } from './graphics.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';

@Controller('product-graphics')
export class GraphicsController {
  constructor(private readonly graphicsService: GraphicsService) {}

  @Post()
  create(@Body() createGraphicDto: CreateLookupDto) {
    return this.graphicsService.create(createGraphicDto);
  }

  @Get('all')
  findAll() {
    return this.graphicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.graphicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGraphicDto: CreateLookupDto) {
    return this.graphicsService.update(+id, updateGraphicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.graphicsService.remove(+id);
  }
}
