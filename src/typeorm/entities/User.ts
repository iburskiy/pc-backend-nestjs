import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({default: false})
  isAdmin: boolean;

  /*@ManyToOne(() => Order, entity => entity.id, { nullable: true, eager: true })
  @JoinColumn({name: 'order_id'})
  order: Order;*/
}