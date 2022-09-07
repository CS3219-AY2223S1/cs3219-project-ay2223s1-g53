import {
  Body,
  Controller,
  Get,
  Post,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, FindUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  async create(@Body() UserDto: UserDto) {
    await this.userService.create(UserDto);
  }

  @Get('get')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('get/user')
  async findOne(@Body() findUserDto: FindUserDto): Promise<User> {
    return this.userService.findOne(findUserDto);
  }

  @Post('delete')
  async delete(@Body() findUserDto: FindUserDto) {
    return this.userService.delete(findUserDto);
  }

  @Post('login')
  async login(@Body() userDto: UserDto) {
    return userDto;
  }
}
