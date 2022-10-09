import { Team } from '../entities/team.entity';
export class CreatePersonInput {
  email!: string;
  phone: string;
  name: string;
  age: number;
  status: string;
  userId!: string;
  disciplineId: string;
  teams: Team[];
}
