import { DataSource } from 'typeorm';
import { PersonFunctions } from '../entities/person-functions.entity';

export const personFunctionsProvider = [
  {
    provide: 'PERSON_FUNCTIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PersonFunctions),
    inject: ['DATA_SOURCE'],
  },
];
