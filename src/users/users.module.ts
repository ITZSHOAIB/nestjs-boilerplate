import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './rest/users.controller';
import { USERS_REPOSITORY } from './database/repositories/users.repository.interface';
import { UsersRepository } from './database/repositories/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './database/schemas/user.schema';
import {
  USERS_AUTH_SERVICE,
  UsersAuthService,
} from './services/users-auth.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: USERS_REPOSITORY,
      useClass: UsersRepository,
    },
    UsersService,
    { provide: USERS_AUTH_SERVICE, useClass: UsersAuthService },
  ],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [USERS_AUTH_SERVICE],
})
export class UsersModule {}
