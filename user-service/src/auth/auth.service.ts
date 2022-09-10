import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import signPayload from 'src/libs/signPayload';
import { User } from 'src/types/user';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(userDto: UserDto): Promise<any> {
    const { password } = userDto;
    const user = await this.usersService.findOne(userDto);
    const isValidPassword = await compare(password, user.password);

    if (user && isValidPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: signPayload(payload, '7d'),
    };
  }
}
