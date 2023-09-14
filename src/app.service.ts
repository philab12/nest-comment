import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Roles, User } from './user/entities/user.entity';
import { Seed } from './seed.class';
import { PostEntity } from './post/entities/post.entity';
import { CommentEntity } from './comment/entities/comment.entity';
import { LikeEntity } from './like/entities/like.entity';
import { UserFollowerEntity } from './user-follower/entities/user-follower.entity';
import * as dotenv from "dotenv";

dotenv.config();

@Injectable()
export class AppService extends Seed {
  constructor(entityManager:EntityManager){ 
    super(entityManager);
    if(process.env.SEED) this.fakeData();
 
    // this.entityManager.save<User, Partial<User>>(User, [{
    //   about: "about", name: "rowad", role:Roles.admin, email: "test@test.com"
    // }]).then((data: Array<Partial<User>>) => {
    //   console.log(data);
    // }).catch(console.error)
  }
  getHello(): string {
    return 'Hello World!';
  }

  private async fakeData(): Promise<void>{
    await this.fakeIt(User);
    await this.fakeIt(PostEntity);
    this.fakeIt(CommentEntity);
    this.fakeIt(LikeEntity);
    this.fakeIt(UserFollowerEntity);
  }
}
