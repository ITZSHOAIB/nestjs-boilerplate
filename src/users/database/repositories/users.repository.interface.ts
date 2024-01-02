import { UserDto } from 'src/users/rest/dto/user.dto';
import { User } from '../schemas/user.schema';
import { GetUserDto } from 'src/users/rest/dto/get-user.dto';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export interface IUsersRepository {
  create(user: Omit<User, '_id'>): Promise<string>;
  getById(id: string): Promise<User>;
  getByEmail(email: string): Promise<User>;
  update(id: string, user: Partial<Omit<User, '_id'>>): Promise<void>;
  delete(id: string): Promise<void>;
}
