import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_resolution")
export class LkpProductResolution extends ProductLookup {}
