import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import {
  IUsersRepository,
  USERS_REPOSITORY,
} from '../database/repositories/users.repository.interface';
import { UserDto } from '../rest/dto/user.dto';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async createUser(userDto: CreateUserDto): Promise<string> {
    const user = UserMapper.fromCreateUserDtoToUserSchema(userDto);
    return await this.usersRepository.create(user);
  }

  async getAllUsers(): Promise<UserDto[]> {
    const users = await this.usersRepository.getAll();
    return users.map((user) => UserMapper.fromUserSchemaToUserDto(user));
  }

  async getUserById(id: string): Promise<UserDto> {
    const user = await this.usersRepository.getById(id);
    return UserMapper.fromUserSchemaToUserDto(user);
  }

  async updateUser(id: string, user: UpdateUserDto): Promise<void> {
    const userDetails = UserMapper.fromUpdateUserDtoToUserSchema(user);
    return await this.usersRepository.update(id, userDetails);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
