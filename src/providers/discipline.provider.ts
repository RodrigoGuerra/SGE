import { DataSource } from 'typeorm';
import { Discipline } from '../entities/discipline.entity';

export const DisciplineProvider = [
  {
    provide: 'DISCIPLINE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Discipline),
    inject: ['DATA_SOURCE'],
  },
];
