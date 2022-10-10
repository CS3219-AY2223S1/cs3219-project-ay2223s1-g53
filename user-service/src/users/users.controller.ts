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
import { AuthenticatedGuard } from 'src/auth/guards/auth.authenticated-guard';
import { UserResponseBody } from 'src/types/responses';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async create(@Body() UserDto: UserDto): Promise<UserResponseBody> {
    return this.userService.create(UserDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('get')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @UseGuards(AuthenticatedGuard)
  @Post('get/user')
  async findOne(@Body() findUserDto: FindUserDto): Promise<User> {
    return this.userService.findOne(findUserDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('delete')
  async delete(@Request() req: Request) {
    return this.userService.delete(req);
  }
}
