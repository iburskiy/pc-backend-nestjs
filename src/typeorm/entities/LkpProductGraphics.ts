import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("lkp_product_graphics")
export class LkpProductGraphics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}
