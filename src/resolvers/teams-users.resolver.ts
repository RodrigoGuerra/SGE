import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamsUsersService } from '../services/teams-users.service';

@Resolver('Teams_Users')
export class TeamsUsersResolver {
  constructor(private readonly teamsUsersService: TeamsUsersService) {}
}
