import { Module } from '@nestjs/common';
import { DisciplinesResolver } from '../resolvers/disciplines.resolver';
import { DisciplinesService } from '../services/disciplines.service';
import { DisciplineProvider } from '../providers/discipline.provider';
import { DatabaseModule } from './database.module';

@Module({
  providers: [...DisciplineProvider, DisciplinesResolver, DisciplinesService],
  imports: [DatabaseModule],
})
export class DisciplinesModule {}
