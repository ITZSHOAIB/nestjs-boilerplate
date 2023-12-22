import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { IUsersRepository } from './users.repository.interface';
import { UserDto } from 'src/users/rest/dto/user.dto';
import { UserMapper } from 'src/users/mappers/user.mapper';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: User): Promise<string> {
    const newUser = new this.userModel(user);
    const createdUser = await newUser.save();
    return createdUser._id.toString();
  }

  async getAll(): Promise<UserDto[]> {
    const users = await this.userModel.find();
    return users.map((user) =>
      UserMapper.fromUserSchemaToUserDto(user._id.toString(), user),
    );
  }

  async getById(id: string): Promise<UserDto> {
    const user = await this.userModel.findOne({ _id: id });
    return UserMapper.fromUserSchemaToUserDto(user._id.toString(), user);
  }

  async update(id: string, user: Partial<User>): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }
}
