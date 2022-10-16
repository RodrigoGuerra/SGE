import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamsService } from '../services/teams.service';
import { CreateTeamInput } from '../dtos/create-team.input';
import { UpdateTeamInput } from '../dtos/update-team.input';
import { extendSchemaImpl } from 'graphql/utilities/extendSchema';

@Resolver('Team')
export class TeamsResolver {
  constructor(private readonly teamsService: TeamsService) {}
  @Mutation('createTeam')
  create(@Args('createTeamInput') createTeamInput: CreateTeamInput) {
    if (!createTeamInput.name) {
      throw new Error('Name is required');
    }
    return this.teamsService.createUser(createTeamInput);
  }

  @Query('teamByName')
  findOne(@Args('name') name: string) {
    if (!name) throw new Error('Name not recive!');
    return this.teamsService.findByName(name);
  }

  @Query('listTeams')
  findAllDisciplines() {
    return this.teamsService.findAllTeams();
  }

  @Mutation('updateTeam')
  update(@Args('updateTeamInput') updateTeamInput: UpdateTeamInput) {
    return this.teamsService.update(updateTeamInput.teamId, updateTeamInput);
  }

  @Mutation('removeTeam')
  removeUser(@Args('teamId') teamId: string) {
    return this.teamsService.remove(teamId);
  }
}
