import { Module } from '@nestjs/common';
import { PersonFunctionsResolver } from '../resolvers/person-functions.resolver';
import { PersonFunctionsService } from '../services/person-functions.service';
import { personFunctionsProvider } from '../providers/person-function.provider';
import { DatabaseModule } from './database.module';

@Module({
  providers: [
    ...personFunctionsProvider,
    PersonFunctionsResolver,
    PersonFunctionsService,
  ],
  imports: [DatabaseModule],
})
export class FunctionsModule {}
