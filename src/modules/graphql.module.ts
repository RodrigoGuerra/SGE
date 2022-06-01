import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      installSubscriptionHandlers: true,
      debug: true,
      playground: true,
      typePaths: [join(process.cwd(), '_schema.graphql')],
      driver: ApolloDriver,
    }),
  ],
})
export class GqlModule {}
