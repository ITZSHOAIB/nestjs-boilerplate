import { User } from '../schemas/user.schema';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export interface IUsersRepository {
  create(user: User): Promise<User>;
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User>;
  update(id: string, User: Partial<User>): Promise<void>;
  delete(id: string): Promise<void>;
}
