import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_color")
export class LkpProductColor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
