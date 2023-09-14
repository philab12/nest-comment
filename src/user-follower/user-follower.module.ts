import { Module } from '@nestjs/common';
import { UserFollowerEntity } from './entities/user-follower.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserFollowerEntity])],
})
export class UserFollowerModule {}
