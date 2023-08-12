import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_resolution")
export class LkpProductResolution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
