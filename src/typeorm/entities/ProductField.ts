import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("product_field")
export class ProductField {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "product_field"})
  productField: string;

  @Column("varchar", { name: "lookup_table_values", nullable: true})
  lookupTableValues: string;

  @Column("varchar", { name: "filter_type", nullable: true})
  filterType: string;

  @Column("tinyint", { name: "filterable", nullable: true })
  filterable: boolean;
}
