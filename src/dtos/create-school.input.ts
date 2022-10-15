import { Team } from '../entities/team.entity';
export class CreateSchoolInput {
  name!: string;
  userId: string;
  teams: Team[];
}
