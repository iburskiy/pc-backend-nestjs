import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductFieldService } from './product-field.service';
import { UpdateProductFieldDto } from './dto/update-product-field.dto';

@Controller('product-field')
export class ProductFieldController {
  constructor(private readonly productFieldService: ProductFieldService) {}

  @Get('all')
  findAll() {
    return this.productFieldService.findAll();
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateProductFieldDto: UpdateProductFieldDto) {
    try {
      await this.productFieldService.update(+id, updateProductFieldDto);
      return { success: true, message: `Field updated!` }
    } catch (err) {
      console.error(`There was an error updating Field with ID=${id}`, '\n', `${err}`);
      return { success: false, message: `There was an error updating Field with ID=${id}` }
    }
  }
}
