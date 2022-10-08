import { Module } from '@nestjs/common';
import { FunctionsResolver } from '../resolvers/functions.resolver';
import { FunctionsService } from '../services/functions.service';
import { FunctionProvider } from '../providers/function.provider';
import { DatabaseModule } from './database.module';

@Module({
  providers: [...FunctionProvider, FunctionsResolver, FunctionsService],
  imports: [DatabaseModule],
})
export class FunctionsModule {}
