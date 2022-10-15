import { Team } from '../entities/team.entity';
export class CreateSchoolInput {
  name!: string;
  managerId: string;
  teams: Team[];
}
