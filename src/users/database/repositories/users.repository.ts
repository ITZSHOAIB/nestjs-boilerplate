import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { IUsersRepository } from './users.repository.interface';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: User): Promise<string> {
    const newUser = new this.userModel(user);
    const createdUser = await newUser.save();
    return createdUser._id.toString();
  }

  async getAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async getById(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async update(id: string, user: Partial<User>): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }
}
