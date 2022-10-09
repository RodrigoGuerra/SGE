import { Injectable, Inject } from '@nestjs/common';
import { CreatePersonInput } from '../dtos/create-person.input';
import { UpdatePersonInput } from '../dtos/update-person.input';
import { Repository } from 'typeorm';
import { Person } from '../entities/person.entity';
import { v4 } from 'uuid';

@Injectable()
export class PersonsService {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private personRepository: Repository<Person>,
  ) {}

  createUser(createPersonInput: CreatePersonInput) {
    const person: Person = {
      personId: v4(),
      createdAt: new Date(),
      email: createPersonInput.email,
      name: createPersonInput.name,
      phone: createPersonInput.phone,
      age: createPersonInput.age,
      status: createPersonInput.status,
      userId: createPersonInput.userId,
      disciplineId: createPersonInput.disciplineId,
      teams: createPersonInput.teams,
      updatedAt: null,
      //icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    return this.personRepository.save(person);
  }

  findOne(personId: string) {
    return this.personRepository.findOne({ where: { personId } });
  }
  async findByEmail(email: string) {
    const result = await this.personRepository.findOne({ where: { email } });
    // if (!result) throw new Error('User not found');
    return result;
  }

  async update(
    personId: string,
    updatePersonInput: UpdatePersonInput,
  ): Promise<Person> {
    const person = await this.personRepository.findOne({ where: { personId } });
    if (!person) {
      throw new Error('Person not found!');
    }
    const result = await this.personRepository.update(
      personId,
      updatePersonInput,
    );
    if (!result.affected) {
      throw new Error('Person not updated!');
    }
    return person;
  }

  async remove(personId: string): Promise<boolean> {
    const result = await this.personRepository.delete(personId);
    return result.affected ? true : false;
  }
}
