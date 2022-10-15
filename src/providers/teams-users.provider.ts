import { DataSource } from 'typeorm';
import { TeamsUsers } from '../entities/teams-users.entity';

export const TeamsUsersProvider = [
  {
    provide: 'TEAMS_USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TeamsUsers),
    inject: ['DATA_SOURCE'],
  },
];
