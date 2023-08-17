import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductFieldService } from './product-field.service';
import { UpdateProductFieldDto } from './dto/update-product-field.dto';

@Controller('product-field')
export class ProductFieldController {
  constructor(private readonly productFieldService: ProductFieldService) {}

  @Get('all')
  findAll() {
    return this.productFieldService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductFieldDto: UpdateProductFieldDto) {
    return this.productFieldService.update(+id, updateProductFieldDto);
  }
}
