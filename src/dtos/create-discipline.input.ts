import { Person } from '../entities/person.entity';
export class CreateDisciplineInput {
  name!: string;
  persons: Person[];
}
