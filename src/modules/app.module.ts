import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { GqlModule } from './graphql.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from '../controlles/healthcheck';

@Module({
  imports: [UsersModule, GqlModule, TerminusModule],
  providers: [],
  controllers: [HealthCheckController],
})
export class AppModule {}
