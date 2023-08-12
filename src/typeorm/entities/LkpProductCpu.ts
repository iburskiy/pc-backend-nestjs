import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_cpu")
export class LkpProductCpu extends ProductLookup {}
