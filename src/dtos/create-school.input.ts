import { Team } from '../entities/team.entity';
export class CreateSchoolInput {
  name!: string;
  personId: string;
  teams: Team[];
}
