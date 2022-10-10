import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto, FindUserDto } from './dto/user.dto';
import { User, SanitizedUser } from 'src/types/user';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { UserResponseBody } from 'src/types/responses';
import { Payload } from 'src/types/payload';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(UserDto: UserDto): Promise<UserResponseBody> {
    const existingUser = await this.userModel
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

    const createdUser = await this.userModel.create(UserDto);
    const sanitizedUser = this.sanitizeUser(createdUser);
    const token = this.signPayload(sanitizedUser, '7d');
    return { username: sanitizedUser.username, jwt: token };
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(findUserDto: FindUserDto): Promise<User> {
    return this.userModel.findOne({ username: findUserDto.username }).exec();
  }

  async delete(findUserDto: FindUserDto) {
    const deletedUser = await this.userModel
      .deleteOne({ username: findUserDto.username })
      .exec();
    return deletedUser;
  }

  async checkLogin(userDto: UserDto): Promise<UserResponseBody> {
    const user = await this.findOne(userDto);
    // if user does not exist in db, throw error
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'This user does not exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // if user entered wrong password, throw error
    const isValidPassword = await compare(user.password, userDto.password);

    if (isValidPassword) {
      const sanitized = this.sanitizeUser(user);
      const token = this.signPayload(sanitized, '7d');
      return { username: sanitized.username, jwt: token };
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Your password is invalid',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  signPayload(payload: Payload, expiry: string): string {
    return sign(payload, process.env.SECRET_KEY, {
      expiresIn: expiry,
    });
  }

  sanitizeUser(user: User): SanitizedUser {
    const sanitized: User = user.toObject();
    delete sanitized.password;

    return sanitized;
  }
}
