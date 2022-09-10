import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, FindUserDto } from './dto/user.dto';
import { User, SanitizedUser } from 'src/types/user';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async create(@Body() UserDto: UserDto): Promise<SanitizedUser> {
    return this.userService.create(UserDto);
  }

  @Get('get')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('get/user')
  async findOne(@Body() findUserDto: FindUserDto): Promise<User> {
    return this.userService.findOne(findUserDto);
  }
}
