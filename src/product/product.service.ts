import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
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

  async create(createProductDto: CreateProductDto) {
    const dto = createProductDto;

    dto.image = dto.image ? dto.image : null;
    dto.imageName = dto.imageName ? dto.imageName : null;
    dto.core = dto.core ? dto.core : null;
    dto.diagonal = dto.diagonal ? dto.diagonal : null;
    dto.sizeHD = dto.sizeHD ? dto.sizeHD : null;
    dto.refreshRate = dto.refreshRate ? dto.refreshRate : null;
    dto.weight = dto.weight ? dto.weight : null;
    dto.thickness = dto.thickness ? dto.thickness : null;
    dto.cpuModel = dto.cpuModel ? dto.cpuModel : null;
    dto.graphicsModel = dto.graphicsModel ? dto.graphicsModel : null;
    dto.url = dto.url ? dto.url : null;

    return this.productsRepository.query(
      `INSERT INTO product (model,image,image_name,code,price,year_id,brand_id,type_id,cpu_id,color_id,graphics_id,os_id,resolution_id,ram_type_id,ram,core,diagonal,sizeHD,refresh_rate,weight,thickness,cpu_model,graphics_model,url)
                VALUES ('${dto.model}',${dto.image},${dto.imageName},'${dto.code}',${dto.price},
                        ${dto.yearId},${dto.brandId},${dto.typeId},${dto.cpuId},${dto.colorId},${dto.graphicsId},${dto.osId},
                        ${dto.resolutionId},${dto.ramTypeId},${dto.ram},${dto.core},${dto.diagonal},${dto.sizeHD},
                        ${dto.refreshRate},${dto.weight},${dto.thickness},${dto.cpuModel},${dto.graphicsModel},${dto.url})
      `);

    // There was an error creating Product model Asd model3:
    //  TypeError: Cannot set properties of undefined (setting 'id')
    /*
    const product = new Product();
    product.model = createProductDto.model;
    product.image = createProductDto.image;
    product.imageName = createProductDto.imageName;
    product.code = createProductDto.code;
    product.price = createProductDto.price;
    product.yearEntity.id = createProductDto.yearId;
    product.brandEntity.id = createProductDto.brandId;
    product.typeEntity.id = createProductDto.typeId;
    product.cpuEntity.id = createProductDto.cpuId;
    product.colorEntity.id = createProductDto.colorId;
    product.graphicsEntity.id = createProductDto.graphicsId;
    product.osEntity.id = createProductDto.osId;
    product.resolutionEntity.id = createProductDto.resolutionId;
    product.ramTypeEntity.id = createProductDto.ramTypeId;
    product.ram = parseInt(createProductDto.ram);
    product.core = parseInt(createProductDto.core);
    product.diagonal = parseInt(createProductDto.diagonal);
    product.sizeHD = parseInt(createProductDto.sizeHD);
    product.refreshRate = parseInt(createProductDto.refreshRate);
    product.weight = parseInt(createProductDto.weight);
    product.thickness = parseInt(createProductDto.thickness);
    product.cpuModel = createProductDto.cpuModel;
    product.graphicsModel = createProductDto.graphicsModel;
    product.url = createProductDto.url;

    const res = await this.productsRepository.save(product);
    return res;*/
  }

  findAll(productsPerPage: number, query): Promise<Product[]> {
    const pageNumber = query.page ? query.page : 1;
    const filters = query.filters;
    const q = query.q;
    const havingClause = this.makeHavingClause(filters, q);

    return this.productsRepository.query(
      `${SELECT_PRODUCTS_STATEMENT}
              ${havingClause}
              LIMIT ${productsPerPage} OFFSET ${productsPerPage * pageNumber - productsPerPage}`
    );
  }

  async findCount(query) {
    const filters = query.filters;
    const q = query.q;
    const havingClause = this.makeHavingClause(filters, q);

    const queryArray = await this.productsRepository.query(
      `select count(*) as productCount from (
                ${SELECT_PRODUCTS_STATEMENT}
                ${havingClause}
             ) sub`);
    return queryArray[0];
  }

  async findOne(id: number) {
    return this.productsRepository
      .createQueryBuilder('product')
      .select(['product.*'])
      .where("product.id = :id", {id: id})
      .getRawOne();
  }

  async findOneByCode(code: string) {
    const product = await this.productsRepository
      .createQueryBuilder('p')
      .select([
        'p.id AS id',
        'p.model AS model',
        'p.image AS image',
        'p.code AS code',
        'p.price AS price',
        'yearEntity.value AS year',
        'brandEntity.value AS brand',
        'typeEntity.value AS type',
        'cpuEntity.value AS cpu',
        'colorEntity.value AS color',
        'graphicsEntity.value AS graphicsCard',
        'osEntity.value AS os',
        'resolutionEntity.value AS resolution',
        'ramTypeEntity.value AS ramType',
        'p.ram AS ram',
        'p.core AS core',
        'p.diagonal AS diagonal',
        'p.sizeHD AS sizeHD',
        'p.refresh_rate AS refreshRate',
        'p.weight AS weight',
        'p.thickness AS thickness',
        'p.cpu_model AS cpuModel',
        'p.graphics_model AS graphicsModel',
        'p.url AS url',
      ])
      .leftJoin("p.yearEntity", "yearEntity")
      .leftJoin("p.brandEntity", "brandEntity")
      .leftJoin("p.typeEntity", "typeEntity")
      .leftJoin("p.cpuEntity", "cpuEntity")
      .leftJoin("p.colorEntity", "colorEntity")
      .leftJoin("p.graphicsEntity", "graphicsEntity")
      .leftJoin("p.osEntity", "osEntity")
      .leftJoin("p.resolutionEntity", "resolutionEntity")
      .leftJoin("p.ramTypeEntity", "ramTypeEntity")
      .where("p.code = :code", {code: code})
      .getRawOne();

    return product;
  }

  async update(id: number, createProductDto: CreateProductDto) {
    const dto = createProductDto;

    dto.image = dto.image ? dto.image : null;
    dto.imageName = dto.imageName ? dto.imageName : null;
    dto.core = dto.core ? dto.core : null;
    dto.diagonal = dto.diagonal ? dto.diagonal : null;
    dto.sizeHD = dto.sizeHD ? dto.sizeHD : null;
    dto.refreshRate = dto.refreshRate ? dto.refreshRate : null;
    dto.weight = dto.weight ? dto.weight : null;
    dto.thickness = dto.thickness ? dto.thickness : null;
    dto.cpuModel = dto.cpuModel ? dto.cpuModel : null;
    dto.graphicsModel = dto.graphicsModel ? dto.graphicsModel : null;
    dto.url = dto.url ? dto.url : null;

    return this.productsRepository.query(
      `UPDATE product SET model='${dto.model}', image=NULLIF(${dto.image},''), image_name=NULLIF(${dto.imageName},''), code='${dto.code}',
                   price=${dto.price}, year_id=${dto.yearId}, brand_id=${dto.brandId}, type_id=${dto.typeId}, cpu_id=${dto.cpuId}, color_id=${dto.colorId}, 
                   graphics_id=${dto.graphicsId}, os_id=${dto.osId}, resolution_id=${dto.resolutionId}, ram_type_id=${dto.ramTypeId},ram=${dto.ram},
                   core=NULLIF(${dto.core},''), diagonal=NULLIF(${dto.diagonal},''), sizeHD=NULLIF(${dto.sizeHD},''), 
                   refresh_rate=NULLIF(${dto.refreshRate},''), weight=NULLIF(${dto.weight},''),
                   thickness=NULLIF(${dto.thickness},''),cpu_model=NULLIF('${dto.cpuModel}',''), graphics_model=NULLIF('${dto.graphicsModel}',''),
                   url=NULLIF('${dto.url}','')
                    WHERE id = ${id}`
    );
  }

  remove(id: number) {
    return this.productsRepository.delete(id);
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
