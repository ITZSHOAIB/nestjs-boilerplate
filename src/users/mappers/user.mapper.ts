import { User } from '../database/schemas/user.schema';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import { UserDto } from '../rest/dto/user.dto';

export class UserMapper {
  static fromUserSchemaToUserDto(user: User): UserDto {
    const { _id, fullName, email, phoneNumber, verified } = user;
    return {
      id: _id.toString(),
      fullName,
      email,
      phoneNumber,
      verified,
    };
  }

  static fromCreateUserDtoToUserSchema(user: CreateUserDto): User {
    const { fullName, email, phoneNumber, verified } = user;
    return {
      fullName,
      email,
      phoneNumber,
      verified,
    };
  }

  static fromUpdateUserDtoToUserSchema(user: UpdateUserDto): Partial<User> {
    const { fullName, email, phoneNumber, verified } = user;
    return {
      ...(fullName && { fullName }),
      ...(email && { email }),
      ...(phoneNumber && { phoneNumber }),
      ...(verified && { verified }),
    };
  }
}
