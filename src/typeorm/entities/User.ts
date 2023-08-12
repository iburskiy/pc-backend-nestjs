import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}