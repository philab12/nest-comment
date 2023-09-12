import { Injectable } from '@nestjs/common';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepo:Repository<PostEntity>){}

    
}
