import { CreateTeamsUsersInput } from './create-teams-users.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTeamsUsersInput extends PartialType(CreateTeamsUsersInput) {
  teamsUsersId: string;
}
