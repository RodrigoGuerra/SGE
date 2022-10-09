import { Module } from '@nestjs/common';
import { SchoolsResolver } from '../resolvers/schools.resolver';
import { SchoolsService } from '../services/schools.service';
import { SchoolProvider } from '../providers/school.provider';
import { DatabaseModule } from './database.module';

@Module({
  providers: [...SchoolProvider, SchoolsResolver, SchoolsService],
  imports: [DatabaseModule],
})
export class UsersModule {}
