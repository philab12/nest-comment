import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Roles, User } from './user/entities/user.entity';

@Injectable()
export class AppService {
  constructor(private readonly entityManager:EntityManager){
    // this.entityManager.save<User, Partial<User>>(User, [{
    //   about: "about", name: "rowad", role:Roles.admin, email: "test@test.com"
    // }]).then((data: Array<Partial<User>>) => {
    //   console.log(data);
    // }).catch(console.error)
  }
  getHello(): string {
    return 'Hello World!';
  }
}
