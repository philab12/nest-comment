import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { UserFollowerModule } from './user-follower/user-follower.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ".env"
  }), TypeOrmModule.forRoot(dataSourceOptions), UserModule, PostModule, CommentModule, LikeModule, UserFollowerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
