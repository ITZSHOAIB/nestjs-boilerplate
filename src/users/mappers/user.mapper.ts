import { User } from '../database/schemas/user.schema';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { GetUserDto } from '../rest/dto/get-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import { UserDto } from '../rest/dto/user.dto';

export class UserMapper {
  static dbToGetUserDto(user: User): GetUserDto {
    const { _id, fullName, email, verified } = user;
    return {
      id: _id.toString(),
      fullName,
      email,
      verified,
    };
  }

  static dbToUserDto(user: User): UserDto {
    const { _id, fullName, email, verified, password } = user;
    return {
      id: _id.toString(),
      fullName,
      email,
      verified,
      password,
    };
  }

  static createUserDtoToDb(user: CreateUserDto): Omit<User, '_id'> {
    const { fullName, email, password } = user;
    return {
      fullName,
      email,
      password,
    };
  }

  static updateUserDtoToDb(user: UpdateUserDto): Partial<Omit<User, '_id'>> {
    const { fullName } = user;
    return {
      ...(fullName && { fullName }),
    };
  }
}
