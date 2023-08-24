import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { YearService } from './year.service';
import { CreateLookupDto } from '../_dto/create-lookup.dto';
import { PRODUCT_LOOKUP_FIELD_TEXT } from '../../constants';

@Controller('product-year')
export class YearController {
  constructor(private readonly lookupService: YearService) {}

  @Post('create')
  async create(@Body() createLookupDto: CreateLookupDto) {
    try {
      await this.lookupService.create(createLookupDto);
      return { success: true, message: `${PRODUCT_LOOKUP_FIELD_TEXT} "${createLookupDto.value}" created!` };
    } catch (err) {
      console.error(`There was an error creating ${PRODUCT_LOOKUP_FIELD_TEXT} ${createLookupDto.value}:`, '\n', `${err}`);
      return { success: false, message: `There was an error creating ${PRODUCT_LOOKUP_FIELD_TEXT} "${createLookupDto.value}"` };
    }
  }

  @Get('all')
  findAll() {
    return this.lookupService.findAll();
  }

  @Get('all/extended')
  findAllExtended() {
    return this.lookupService.findAllExtended();
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() createLookupDto: CreateLookupDto) {
    try {
      await this.lookupService.update(+id, createLookupDto);
      return { success: true, message: `${PRODUCT_LOOKUP_FIELD_TEXT} "${createLookupDto.value}" updated!` }
    } catch (err) {
      console.error(`There was an error updating ${PRODUCT_LOOKUP_FIELD_TEXT} ${createLookupDto.value}:`, '\n', `${err}`);
      return { success: false, message: `There was an error updating ${PRODUCT_LOOKUP_FIELD_TEXT} "${createLookupDto.value}"` }
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    try {
      await this.lookupService.remove(+id);
      return { success: true, message: `${PRODUCT_LOOKUP_FIELD_TEXT} with ID="${id}" deleted!` }
    } catch (err) {
      console.error(`There was an error deleting ${PRODUCT_LOOKUP_FIELD_TEXT} with ID=${id}:`, '\n', `${err}`);
      return { success: false, message: `There was an error deleting ${PRODUCT_LOOKUP_FIELD_TEXT} with ID="${id}"` };
    }
  }
}
