import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_color")
export class LkpProductColor extends ProductLookup {}
