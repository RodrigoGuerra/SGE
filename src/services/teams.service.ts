import { Injectable, Inject } from '@nestjs/common';
import { CreateTeamInput } from '../dtos/create-team.input';
import { UpdateTeamInput } from '../dtos/update-team.input';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';
import { v4 } from 'uuid';

@Injectable()
export class TeamsService {
  constructor(
    @Inject('TEAM_REPOSITORY')
    private teamRepository: Repository<Team>,
  ) {}

  createUser(createTeamInput: CreateTeamInput) {
    const team: Team = {
      teamId: v4(),
      createdAt: new Date(),
      name: createTeamInput.name,
      disciplineId: createTeamInput.disciplineId,
      schoolId: createTeamInput.schoolId,
      persons: createTeamInput.Persons,
      updatedAt: null,
      //icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    return this.teamRepository.save(team);
  }

  findOne(teamId: string) {
    return this.teamRepository.findOne({ where: { teamId } });
  }
  async findByName(name: string) {
    const result = await this.teamRepository.findOne({ where: { name } });
    // if (!result) throw new Error('User not found');
    return result;
  }

  async update(
    teamId: string,
    updateTeamInput: UpdateTeamInput,
  ): Promise<Team> {
    const team = await this.teamRepository.findOne({ where: { teamId } });
    if (!team) {
      throw new Error('Team not found!');
    }
    const result = await this.teamRepository.update(teamId, updateTeamInput);
    if (!result.affected) {
      throw new Error('Team not updated!');
    }
    return team;
  }

  async remove(teamId: string): Promise<boolean> {
    const result = await this.teamRepository.delete(teamId);
    return result.affected ? true : false;
  }
}
