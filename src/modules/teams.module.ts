import { Module } from '@nestjs/common';
import { TeamsResolver } from '../resolvers/teams.resolver';
import { TeamsService } from '../services/teams.service';
import { TeamProvider } from '../providers/team.provider';
import { DatabaseModule } from './database.module';

@Module({
  providers: [...TeamProvider, TeamsResolver, TeamsService],
  imports: [DatabaseModule],
})
export class PersonsModule {}
