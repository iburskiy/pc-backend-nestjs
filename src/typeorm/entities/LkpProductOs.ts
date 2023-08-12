import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_os")
export class LkpProductOs extends ProductLookup {}
