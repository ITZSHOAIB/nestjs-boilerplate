import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  USERS_AUTH_SERVICE,
  UsersAuthService,
} from 'src/users/services/users-auth.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../rest/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USERS_AUTH_SERVICE)
    private readonly usersAuthService: UsersAuthService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<string> {
    const user = await this.usersAuthService.getUserByEmail(loginDto.email);
    if (
      user === null ||
      !bcrypt.compareSync(loginDto.password, user.password)
    ) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    return this.jwtService.signAsync(payload);
  }

  async validateUser(payload) {
    const user = await this.usersAuthService.getUserByEmail(payload.email);

    if (user !== null && user.email === payload.email) {
      return user;
    }
    throw new UnauthorizedException();
  }
}
