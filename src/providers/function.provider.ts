import { DataSource } from 'typeorm';
import { Functions } from '../entities/function.entity';

export const FunctionProvider = [
  {
    provide: 'FUNCTION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Function),
    inject: ['DATA_SOURCE'],
  },
];
