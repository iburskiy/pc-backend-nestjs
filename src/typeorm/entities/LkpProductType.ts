import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_type")
export class LkpProductType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
