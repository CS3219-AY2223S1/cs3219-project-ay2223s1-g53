import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userDto: UserDto): Promise<any> {
    const user = await this.usersService.findOne(userDto);
    if (!user) {
      throw new UnauthorizedException('This user does not exist.');
    }
    {
      const { password } = userDto;
      const isValidPassword = await compare(password, user?.password ?? '');
      if (!isValidPassword) {
        throw new UnauthorizedException('The password is wrong.');
      }
    }
    const { password, ...result } = user;
    return result;
  }

  async login(userObj: any) {
    const user = userObj._doc;
    const payload = { username: user.username, sub: user._id };
    return { username: user.username, jwt: this.jwtService.sign(payload) };
  }
}
