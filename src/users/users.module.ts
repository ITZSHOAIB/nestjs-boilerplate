import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './rest/users.controller';
import { USERS_REPOSITORY } from './database/repositories/users.repository.interface';
import { UsersRepository } from './database/repositories/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './database/schemas/user.schema';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: USERS_REPOSITORY,
      useClass: UsersRepository,
    },
    UsersService,
  ],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UsersModule {}
