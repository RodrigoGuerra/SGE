import { Module } from '@nestjs/common';
import { UsersResolver } from '../resolvers/users.resolver';
import { UsersService } from '../services/users.service';
import { UserProvider } from '../providers/user.provider';
import { DatabaseModule } from '../modules/database.module';

@Module({
  providers: [...UserProvider, UsersResolver, UsersService],
  imports: [DatabaseModule],
})
export class UsersModule {}
