import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PersonFunctions } from '../entities/person-functions.entity';

@Injectable()
export class PersonFunctionsService {
  constructor(
    @Inject('PERSON_FUNCTION_REPOSITORY')
    private personFunctionRepository: Repository<PersonFunctions>,
  ) {}

  findAllEmployeesByManager(personId: string) {
    return this.personFunctionRepository.find({
      where: {
        personIdFk: personId,
      },
      relations: ['person'],
    });
  }

  findManagerByEmployee(functionsId: string) {
    return this.personFunctionRepository.find({
      where: {
        functionsIdFk: functionsId,
      },
      relations: ['functions'],
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
