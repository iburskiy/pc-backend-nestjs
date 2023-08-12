import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_ram_type")
export class LkpProductRamType extends ProductLookup {}
