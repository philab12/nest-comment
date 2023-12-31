import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get()
    async findAllUser():Promise<User[]>{
        return await this.userService.findAllUser()
    }
}
