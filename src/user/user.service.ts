import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository
      .createQueryBuilder('user')
      .getMany();
  }

  createUser(dto: CreateUserDto) {
    const newUser = this.usersRepository.create({...dto});
    return this.usersRepository.save(newUser);
  }

  /*async findOne(id: number) {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .select(['user.*', 'orders.id AS orderId', 'orders.value AS orderValue'])
      .leftJoin("user.order", "orders")
      .where("user.id = :id", {id: id})
      .getRawOne();
    console.log('user: ', user);
    return user;
  }*/
}
