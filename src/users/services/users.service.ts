import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import {
  IUsersRepository,
  USERS_REPOSITORY,
} from '../database/repositories/users.repository.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async createUser(user: CreateUserDto) {
    return await this.usersRepository.create(user);
  }

  async getAllUsers() {
    return await this.usersRepository.getAll();
  }

  async getUserById(id: string) {
    return await this.usersRepository.getById(id);
  }

  async updateUser(id: string, user: UpdateUserDto) {
    return await this.usersRepository.update(id, user);
  }

  async deleteUser(id: string) {
    await this.usersRepository.delete(id);
  }
}
