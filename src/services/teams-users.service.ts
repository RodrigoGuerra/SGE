import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TeamsUsers } from '../entities/teams-users.entity';

@Injectable()
export class TeamsUsersService {
  constructor(
    @Inject('TEAMS_USERS_REPOSITORY')
    private teamsUsersRepository: Repository<TeamsUsers>,
  ) {}

  findAllTeamsByUser(userId: string) {
    return this.teamsUsersRepository.find({
      where: {
        userIdFk: userId,
      },
      relations: ['user'],
    });
  }

  findUsersByTeam(teamId: string) {
    return this.teamsUsersRepository.find({
      where: {
        teamIdFk: teamId,
      },
      relations: ['team'],
    });
  }
  // create(createManagerEmployeeInput: CreateUserEmployeeInput) {
  //   return 'This action adds a new managerEmployee';
  // }

  findAll() {
    return `This action returns all managerEmployee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerEmployee`;
  }
}