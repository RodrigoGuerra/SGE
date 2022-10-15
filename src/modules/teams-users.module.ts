import { Module } from '@nestjs/common';
import { TeamsUsersService } from '../services/teams-users.service';
import { TeamsUsersResolver } from '../resolvers/teams-users.resolver';
import { TeamsUsersProvider } from '../providers/teams-users.provider';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...TeamsUsersProvider,
    TeamsUsersResolver,
    TeamsUsersService,
  ],
})
export class TeamsUsersModule {}