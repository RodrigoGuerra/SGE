import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { SchoolModule } from './schools.module';
import { DisciplinesModule } from './disciplines.module';
import { GqlModule } from './graphql.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from '../controlles/healthcheck';

@Module({
  imports: [UsersModule, SchoolModule, DisciplinesModule, GqlModule, TerminusModule],
  providers: [],
  controllers: [HealthCheckController],
})
export class AppModule {}
