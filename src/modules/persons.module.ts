import { Module } from '@nestjs/common';
import { PersonsResolver } from '../resolvers/persons.resolver';
import { PersonsService } from '../services/persons.service';
import { PersonProvider } from '../providers/person.provider';
import { DatabaseModule } from './database.module';

@Module({
  providers: [...PersonProvider, PersonsResolver, PersonsService],
  imports: [DatabaseModule],
})
export class PersonsModule {}
