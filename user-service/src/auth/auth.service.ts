import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import signPayload from 'src/libs/signPayload';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(userDto: UserDto): Promise<any> {
    const { password } = userDto;
    const user = await this.usersService.findOne(userDto);
    const isValidPassword = await compare(password, user?.password ?? '');
    if (!user) {
      throw new UnauthorizedException('This user does not exist.');
    }
    if (isValidPassword) {
      const { password, ...result } = user;
      return result;
    } else {
      throw new UnauthorizedException('The password is wrong.');
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._doc._id };
    return {
      access_token: signPayload(payload, '7d'),
    };
  }
}
