import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_brand")
export class LkpProductBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
