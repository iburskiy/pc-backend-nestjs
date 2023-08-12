import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_cpu")
export class LkpProductCpu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
