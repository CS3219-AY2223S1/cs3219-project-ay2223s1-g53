import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { Session } from './schemas/session.schema';
import { Payload } from '../types/payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectModel('Session') private sessionModel: Model<Session>,
  ) {}

  async validateUser(userDto: UserDto): Promise<any> {
    const user = await this.usersService.findOne(userDto);
    if (!user) {
      throw new UnauthorizedException({
        errorCode: 1,
        message: 'This user does not exist.',
      });
    }
    {
      const { password } = userDto;
      const isValidPassword = await compare(password, user?.password ?? '');
      if (!isValidPassword) {
        throw new UnauthorizedException({
          errorCode: 2,
          message: 'The password is wrong.',
        });
      }
    }
    const { password, ...result } = user;
    return result;
  }

  async login(userObj: any) {
    const user = userObj._doc;
    const payload = { username: user.username, sub: user._id };
    this.sessionModel.create({ username: user.username });
    return { username: user.username, jwt: this.jwtService.sign(payload) };
  }

  async logout(jwt: string) {
    const payload: Payload = this.jwtService.decode(jwt) as Payload;
    this.sessionModel.deleteOne({ username: payload.username }).exec();
  }

  async checkSession(jwt: string) {
    const payload: Payload = this.jwtService.decode(jwt) as Payload;
    const session = await this.sessionModel
      .findOne({ username: payload?.username })
      .exec();
    return session ?? null;
  }
}
