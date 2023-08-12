import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LkpProductYear } from './LkpProductYear';
import { LkpProductBrand } from './LkpProductBrand';
import { LkpProductType } from './LkpProductType';
import { LkpProductCpu } from './LkpProductCpu';
import { LkpProductGraphics } from './LkpProductGraphics';
import { LkpProductColor } from './LkpProductColor';
import { LkpProductOs } from './LkpProductOs';
import { LkpProductResolution } from './LkpProductResolution';
import { LkpProductRamType } from './LkpProductRamType';

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "model", unique: true})
  model: string;

  @Column("blob", { name: "image", nullable: true })
  image: string;

  @Column("varchar", { name: "image_name", nullable: true })
  imageName: string;

  @Column("varchar", { name: "code", unique: true})
  code: string;

  @Column("decimal", { name: "price", precision: 6, scale: 2 })
  price: string;

  @ManyToOne(() => LkpProductYear, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'year_id'})
  yearId: LkpProductYear;

  @ManyToOne(() => LkpProductBrand, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'brand_id'})
  brandId: LkpProductBrand;

  @ManyToOne(() => LkpProductType, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'type_id'})
  typeId: LkpProductType;

  @ManyToOne(() => LkpProductCpu, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'cpu_id'})
  cpuId: LkpProductCpu;

  @ManyToOne(() => LkpProductColor, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'color_id'})
  colorId: LkpProductColor;

  @ManyToOne(() => LkpProductGraphics, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'graphics_id'})
  graphicsId: LkpProductGraphics;

  @ManyToOne(() => LkpProductOs, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'os_id'})
  osId: LkpProductOs;

  @ManyToOne(() => LkpProductResolution, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'resolution_id'})
  resolutionId: LkpProductResolution;

  @ManyToOne(() => LkpProductRamType, entity => entity.id, { nullable: false })
  @JoinColumn({name: 'ram_type_id'})
  ramTypeId: LkpProductRamType;

  @Column("int", { name: "ram"})
  ram: number;

  @Column("tinyint", { name: "core", nullable: true})
  core: number;

  @Column("decimal", {
    name: "diagonal",
    nullable: true,
    precision: 3,
    scale: 1,
  })
  diagonal: number;

  @Column("smallint", { name: "sizeHD", nullable: true })
  sizeHd: number;

  @Column("smallint", { name: "refresh_rate", nullable: true})
  refreshRate: number;

  @Column("smallint", { name: "weight", nullable: true})
  weight: number;

  @Column("smallint", { name: "thickness", nullable: true})
  thickness: number;

  @Column("varchar", { name: "cpu_model", nullable: true})
  cpuModel: string;

  @Column("varchar", { name: "graphics_model", nullable: true })
  graphicsModel: string;

  @Column("varchar", { name: "url", nullable: true })
  url: string;
}
