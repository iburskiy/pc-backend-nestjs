import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class ProductLookup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "value"})
  value: string;
}