import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { GqlModule } from './graphql.module';

@Module({
  imports: [UsersModule, GqlModule],
  providers: [],
})
export class AppModule {}
