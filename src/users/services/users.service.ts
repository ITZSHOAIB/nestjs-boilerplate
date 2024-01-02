import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import {
  IUsersRepository,
  USERS_REPOSITORY,
} from '../database/repositories/users.repository.interface';
import { UserMapper } from '../mappers/user.mapper';
import { GetUserDto } from '../rest/dto/get-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async createUser(userDto: CreateUserDto): Promise<string> {
    userDto.password = await bcrypt.hash(userDto.password, 10);
    const user = UserMapper.createUserDtoToDb(userDto);
    return await this.usersRepository.create(user);
  }

  async getUserById(id: string): Promise<GetUserDto> {
    const user = await this.usersRepository.getById(id);
    return UserMapper.dbToGetUserDto(user);
  }

  async updateUser(id: string, user: UpdateUserDto): Promise<void> {
    const userDetails = UserMapper.updateUserDtoToDb(user);
    await this.usersRepository.update(id, userDetails);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
