import { Entity } from 'typeorm';
import { ProductLookup } from './ProductLookup';

@Entity("lkp_product_graphics")
export class LkpProductGraphics extends ProductLookup {}
