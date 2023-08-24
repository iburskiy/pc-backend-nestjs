import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      await this.productService.create(createProductDto);
      return { success: true, message: `Product model "${createProductDto.model}" created.` };
    } catch (err) {
      console.error(`There was an error creating Product model ${createProductDto.model}:`, '\n', `${err}`);
      return { success: false, message: `There was an error creating Product model "${createProductDto.model}"` };
    }
  }

  @Get('all/:products_per_page')
  findAll(@Param('products_per_page') productsPerPage: number, @Query() query) {
    return this.productService.findAll(productsPerPage, query);
  }

  @Get('count')
  findCount(@Query() query) {
    return this.productService.findCount(query);
  }

  @Get('retrieve/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Get('retrieve/code/:code')
  findOneByCode(@Param('code') code: string) {
    return this.productService.findOneByCode(code);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() createProductDto: CreateProductDto) {
    try {
      await this.productService.update(+id, createProductDto);
      return { success: true, message: `Product model "${createProductDto.model} updated!` };
    } catch (err) {
      console.error(`There was an error updating product with ID=${id}:`, '\n', `${err}`);
      return { success: false, message: `There was an error updating Product model "${createProductDto.model}"` };
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    try {
      await this.productService.remove(+id);
      return { success: true, message: `Product with ID="${id}" deleted!`, id: id };
    } catch (err) {
      console.error(`There was an error deleting product with ID=${id}:`, '\n', `${err}`);
      return { success: false, message: `There was an error deleting Product with ID="${id}"` };
    }
  }
}
