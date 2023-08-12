import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_brand")
export class LkpProductBrand extends ProductLookup {}
