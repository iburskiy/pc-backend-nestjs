import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_ram_type")
export class LkpProductRamType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
