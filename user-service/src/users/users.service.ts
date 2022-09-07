import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, FindUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto);

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
