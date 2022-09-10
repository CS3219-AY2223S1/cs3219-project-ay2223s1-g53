import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto, FindUserDto } from './dto/user.dto';
import { User, SanitizedUser } from 'src/types/user';
import { UserResponseBody } from 'src/types/responses';
import signPayload from 'src/libs/signPayload';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(UserDto: UserDto): Promise<UserResponseBody> {
    const existingUser: User = await this.userModel
      .findOne({ username: UserDto.username })
      .exec();

    if (existingUser) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'This username already exists',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const createdUser: User = await this.userModel.create(UserDto);
    const sanitizedUser: SanitizedUser = this.sanitizeUser(createdUser);
    const userId: number = await this.userModel.countDocuments().exec();
    const token = signPayload({ ...sanitizedUser, sub: userId }, '7d');
    return { username: sanitizedUser.username, jwt: token };
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(findUserDto: FindUserDto): Promise<User | undefined> {
    return this.userModel.findOne({ username: findUserDto.username }).exec();
  }

  sanitizeUser(user: User): SanitizedUser {
    const sanitized: User = user.toObject();
    delete sanitized.password;

    return sanitized;
  }
}
