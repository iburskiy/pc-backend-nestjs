import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_type")
export class LkpProductType extends ProductLookup {}
