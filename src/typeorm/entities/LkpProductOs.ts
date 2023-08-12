import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_os")
export class LkpProductOs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
