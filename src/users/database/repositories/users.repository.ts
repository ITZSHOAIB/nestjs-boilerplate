import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { IUsersRepository } from './users.repository.interface';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: Omit<User, '_id'>): Promise<string> {
    const newUser = new this.userModel(user);
    const createdUser = await newUser.save();
    return createdUser._id.toString();
  }

  async getById(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async getByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async update(id: string, user: Partial<Omit<User, '_id'>>): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }
}
