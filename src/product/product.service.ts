import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';

const SELECT_PRODUCTS_STATEMENT = `select p.id, p.model, p.image, p.code, p.price, years.value AS year, brands.value AS brand, types.value AS type,
                                          CPUs.value AS cpu, colors.value AS color, graphicsCards.value AS graphicsCard, OStable.value AS os,
                                          resolutions.value AS resolution, ramTypes.value AS ramType, p.ram, p.core, p.diagonal, p.sizeHD,
                                          p.refresh_rate AS refreshRate, p.weight, p.thickness, p.cpu_model AS cpuModel, p.graphics_model AS graphicsModel, p.url
                                   from product AS p
                                    inner join lkp_product_year AS years on years.id = p.year_id
                                    inner join lkp_product_brand AS brands on brands.id = p.brand_id
                                    inner join lkp_product_type AS types on types.id = p.type_id
                                    inner join lkp_product_cpu AS CPUs on CPUs.id = p.cpu_id
                                    inner join lkp_product_color AS colors on colors.id = p.color_id
                                    inner join lkp_product_graphics AS graphicsCards on graphicsCards.id = p.graphics_id
                                    inner join lkp_product_os AS OStable on OStable.id = p.os_id
                                    inner join lkp_product_resolution AS resolutions on resolutions.id = p.resolution_id
                                    inner join lkp_product_ram_type AS ramTypes on ramTypes.id = p.ram_type_id`;

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(productsPerPage: number, query): Promise<Product[]> {
    console.log('productsPerPage: ', productsPerPage);
    console.log('query: ', query);

    const pageNumber = query.page ? query.page : 1;
    const filters = query.filters;
    const q = query.q;
    const havingClause = this.makeHavingClause(filters, q);
    console.log('havingClause: ', havingClause);

    return this.productsRepository.query(
      `${SELECT_PRODUCTS_STATEMENT}
              ${havingClause}
              LIMIT ${productsPerPage} OFFSET ${productsPerPage * pageNumber - productsPerPage}`
    );
  }

  findCount(query) {
    const filters = query.filters;
    const q = query.q;
    const havingClause = this.makeHavingClause(filters, q);

    return this.productsRepository.query(
      `select count(*) as productCount from (
                ${SELECT_PRODUCTS_STATEMENT}
                ${havingClause}
             ) sub`);
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  private makeHavingClause(filters, searchTerm) {
    function addAnd(havingClause, columnCondition) {
      if (!columnCondition) {
        return havingClause;
      }
      return havingClause ? `${havingClause} AND ${columnCondition}` : columnCondition;
    }

    let havingClause = '';
    const params = filters ? filters.split(',') : [];
    params.forEach((param) => {
      const paramExpr = param.split(':');
      const paramName = paramExpr[0];
      const paramValue = paramExpr[1];

      if (param.includes('..')) { // `range` filter
        const fromTo = paramValue.split('..');
        const from = fromTo[0];
        const to = fromTo[1];

        const valueFromExpr = from ? `${paramName} >= ${from}` : '';
        havingClause = addAnd(havingClause, valueFromExpr);

        const valueToExpr = to ? `${paramName} <= ${to}` : '';
        havingClause = addAnd(havingClause, valueToExpr);
      } else { //`list` filter
        const valuesArr = paramValue.split('|');
        const sqlArrayExpr = valuesArr.map((value) => `'${value}'`).join(',');
        havingClause = addAnd(havingClause, `${paramName} in (${sqlArrayExpr})`);
      }
    })
    if (searchTerm) { //add query if exists
      havingClause = addAnd(havingClause, `(model LIKE '%${searchTerm}%' OR code LIKE '%${searchTerm}%')`);
    }
    return havingClause ? `HAVING ${havingClause}` : '';
  }
}
