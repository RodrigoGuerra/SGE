import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamsUsersService } from '../services/teams-users.service';
import { CreateTeamsUsersInput } from '../dtos/create-teams-users.input';
import { UpdateTeamsUsersInput } from '../dtos/update-teams-users.input';
import { User } from '../entities/user.entity';
import { v4 } from 'uuid';


@Resolver('Teams_Users')
export class TeamsUsersResolver {
  constructor(private readonly teamsUsersService: TeamsUsersService) {}
  @Mutation('createTeamsUsers')
  create(@Args('createTeamsUsersInput') createTeamsUsersInput: CreateTeamsUsersInput) {
    if (!createTeamsUsersInput.userId) {
      throw new Error('UserId is required');
    }
    if (!createTeamsUsersInput.teamId) {
      throw new Error('TeamId is required');
    }
    return this.teamsUsersService.createUser(createTeamsUsersInput);
  }

  @Query('listTeamsUsers')
  findAllDisciplines() {
    return this.teamsUsersService.findAllUsers();
  }

  @Mutation('removeTeamsUsers')
  removeUser(@Args('teamsUsersId') teamsUsersId: string) {
    return this.teamsUsersService.remove(teamsUsersId);
  }
}
