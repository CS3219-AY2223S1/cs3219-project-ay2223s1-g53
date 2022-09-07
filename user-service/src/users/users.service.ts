import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto, FindUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(UserDto: UserDto): Promise<User> {
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

    return createdUser;
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
}
