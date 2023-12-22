import { UserDto } from 'src/users/rest/dto/user.dto';
import { User } from '../schemas/user.schema';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export interface IUsersRepository {
  create(user: User): Promise<string>;
  getAll(): Promise<UserDto[]>;
  getById(id: string): Promise<UserDto>;
  update(id: string, User: Partial<User>): Promise<void>;
  delete(id: string): Promise<void>;
}
