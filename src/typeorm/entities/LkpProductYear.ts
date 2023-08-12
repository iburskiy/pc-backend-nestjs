import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_year")
export class LkpProductYear extends ProductLookup {}
