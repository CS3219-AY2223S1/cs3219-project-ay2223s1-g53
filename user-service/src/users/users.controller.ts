import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, FindUserDto } from './dto/user.dto';
import { User } from 'src/types/user';
import { UserResponseBody } from 'src/types/responses';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/auth/guards/setMetadata';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Public()
  @Post('register')
  async create(@Body() UserDto: UserDto): Promise<UserResponseBody> {
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

  @Post('delete')
  async delete(@Request() req: Request) {
    return this.userService.delete(req);
  }
}
