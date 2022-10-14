import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto, FindUserDto } from './dto/user.dto';
import { User, SanitizedUser } from 'src/types/user';
import { UserResponseBody } from 'src/types/responses';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(UserDto: UserDto): Promise<UserResponseBody> {
    const existingUser: User = await this.userModel
      .findOne({ username: UserDto.username })
      .exec();

    if (existingUser) {
      throw new BadRequestException({
        errorCode: 3,
        message: 'This user already exists.',
      });
    }

    const createdUser: User = await this.userModel.create(UserDto);
    const sanitizedUser: SanitizedUser = this.sanitizeUser(createdUser);

    return { username: sanitizedUser.username };
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

  async delete(req) {
    this.userModel.deleteOne({ username: req.user._doc.username }).exec();
    return { message: `successfully deleted ${req.user._doc.username}` };
  }
}
