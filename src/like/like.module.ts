import { Module } from '@nestjs/common';
import { LikeEntity } from './entities/like.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([LikeEntity])],
})
export class LikeModule {}
