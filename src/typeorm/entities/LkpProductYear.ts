import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_year")
export class LkpProductYear {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
