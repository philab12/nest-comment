import { EntityManager } from 'typeorm';
import { Roles, User } from './user/entities/user.entity';
import { faker } from '@faker-js/faker';
import * as dotenv from "dotenv";
import { PostEntity } from './post/entities/post.entity';
import { CommentEntity } from './comment/entities/comment.entity';
import { Type, LikeEntity } from './like/entities/like.entity';
import { Status, UserFollowerEntity } from './user-follower/entities/user-follower.entity';

dotenv.config();

export class Seed {
    private users: Array<User>;
    private posts: PostEntity[];
  constructor(private readonly entityManager: EntityManager) {}

  async fakeIt<T>(entity: any): Promise<void> {
    switch (entity) {
      case User:
        return this.addData(this.userData(), entity, (data: Array<User>) => (this.users = data),);
        break;

      case PostEntity:
        return this.addData(this.postData(), entity, (data: PostEntity[]) => (this.posts = data));
       break;

      case CommentEntity:
        return this.addData(this.commentData(), entity);
       break;

     case LikeEntity:
        return this.addData(this.likeData(), entity);
     break;

     case UserFollowerEntity:
        return this.addData(this.followData(), entity);
     break;

      default:
        break;
    }
  }

  private userData(): Array<Partial<User>> {
    return this.arr().map<
      Partial<User>
    >(() => {
      return {
        email: faker.internet.email(),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        role: faker.helpers.arrayElement([
          ...Array.from<Roles>({ length: 5 }).fill(Roles.user),
          Roles.admin,
        ]),
        about: faker.lorem.sentence(),
      };
    });
  }



  private postData(): Array<Partial<PostEntity>>{

    return this.arr().map<Partial<PostEntity>>(() => {
      return {
        body: faker.lorem.paragraphs(),
        title: faker.lorem.words(),
        user: faker.helpers.arrayElement<User>(this.users),

      };
    });

  }



  private commentData(): Array<Partial<CommentEntity>>{
    return this.arr().map<Partial<CommentEntity>>(() => {
        return {
            body: faker.lorem.sentence(),
            user:faker.helpers.arrayElement<User>(this.users),
            post:faker.helpers.arrayElement<PostEntity>(this.posts)
        }
    })

  }





  private likeData(): Array<Partial<LikeEntity>>{
    return this.arr().map<Partial<LikeEntity>>(() => {
        return {
            type: faker.helpers.arrayElement(Object.keys(Type)),
            user:faker.helpers.arrayElement<User>(this.users),
            post:faker.helpers.arrayElement<PostEntity>(this.posts)
        }
    })

  }



  private followData(): Array<Partial<UserFollowerEntity>>{

    return this.arr().map<Partial<UserFollowerEntity>>(() => {
        const follower = faker.helpers.arrayElement<User>(this.users);
        const following = faker.helpers.arrayElement<User>(this.users.filter(({id} : Partial<User>) => id !== follower.id ));
        return {
            follower,
            following,
            status: faker.helpers.arrayElement(Object.keys(Status)),
                 
        }
    })

  }


  private arr(): undefined[]{
   return Array.from({ length: +process.env.SEED_NUM || 100 })
  }


  private async addData<T>(data: Array<Partial<T>>, entity: any, cb?:(savedData: Array<Partial<T>>) => void): Promise<void> {
    return this.entityManager
      .save<T, T>(entity, data as any)
      .then((savedData: Array<Partial<T>>) => {
        //console.log(savedData)
        if(cb){
            cb(savedData)
        } 
    }
    ).catch(console.error);
  }

  
}
