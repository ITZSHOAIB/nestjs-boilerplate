import { Inject, Injectable } from '@nestjs/common';
import {
  IUsersRepository,
  USERS_REPOSITORY,
} from '../database/repositories/users.repository.interface';
import { UserDto } from '../rest/dto/user.dto';
import { UserMapper } from '../mappers/user.mapper';

export const USERS_AUTH_SERVICE = 'USERS_AUTH_SERVICE';

@Injectable()
export class UsersAuthService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async getUserByEmail(email: string): Promise<UserDto> {
    const user = await this.usersRepository.getByEmail(email);
    return UserMapper.dbToUserDto(user);
  }
}
