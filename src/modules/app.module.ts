import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { SchoolModule } from './schools.module';
import { DisciplinesModule } from './disciplines.module';
import { TeamsModule } from './teams.module';
import { TeamsUsersModule } from './teams-users.module';
import { GqlModule } from './graphql.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from '../controlles/healthcheck';
import { AuthorizeModule } from './authorize.module';

@Module({
  imports: [UsersModule, SchoolModule, DisciplinesModule, TeamsModule, TeamsUsersModule, GqlModule, TerminusModule, AuthorizeModule],
  providers: [],
  controllers: [HealthCheckController],
})
export class AppModule {}
