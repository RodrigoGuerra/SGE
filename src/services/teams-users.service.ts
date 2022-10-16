import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TeamsUsers } from '../entities/teams-users.entity';
import { CreateTeamsUsersInput } from '../dtos/create-teams-users.input';
import { UpdateTeamsUsersInput } from '../dtos/update-teams-users.input';
import { User } from '../entities/user.entity';
import { v4 } from 'uuid';

@Injectable()
export class TeamsUsersService {
  constructor(
    @Inject('TEAMS_USERS_REPOSITORY')
    private teamsUsersRepository: Repository<TeamsUsers>,
  ) {}

  createUser(creatTeamsUsersInput: CreateTeamsUsersInput) {
    const teamsUsers: TeamsUsers = {
      teamsUsersId: v4(),
      userId: creatTeamsUsersInput.userId,
      teamId: creatTeamsUsersInput.teamId,
      createdAt: new Date(),
      updatedAt: null,
    };
    return this.teamsUsersRepository.save(teamsUsers);
  }

    async findAllUsers() {
    const result = await this.teamsUsersRepository.find();
    return result;
  }

  async remove(userId: string): Promise<boolean> {
    const result = await this.teamsUsersRepository.delete(userId);
    return result.affected ? true : false;
  }

  findAllTeamsByUser(userId: string) {
    return this.teamsUsersRepository.find({
      where: {
        userId: userId,
      },
      relations: ['user'],
    });
  }

  findUsersByTeam(teamId: string) {
    return this.teamsUsersRepository.find({
      where: {
        teamId: teamId,
      },
      relations: ['team'],
    });
  }

  async findAllDisciplines() {
    const result = await this.teamsUsersRepository.find();
    return result;
  }

}