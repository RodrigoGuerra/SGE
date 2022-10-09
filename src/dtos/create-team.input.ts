import { Person } from '../entities/person.entity';
export class CreateTeamInput {
  name!: string;
  disciplineId: string;
  schoolId: string;
  Persons: Person[];
}
