import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PersonsService } from '../services/persons.service';
import { CreatePersonInput } from '../dtos/create-person.input';
import { UpdatePersonInput } from '../dtos/update-person.input';
import { extendSchemaImpl } from 'graphql/utilities/extendSchema';

@Resolver('Person')
export class PersonsResolver {
  constructor(private readonly personsService: PersonsService) {}
  @Mutation('createPerson')
  create(@Args('createPersonInput') createPersonInput: CreatePersonInput) {
    if (!createPersonInput.email) {
      throw new Error('Email is required');
    }
    return this.personsService.createUser(createPersonInput);
  }

  @Query('personByEmail')
  findOne(@Args('email') email: string) {
    if (!email) throw new Error('email not recive!');
    return this.personsService.findByEmail(email);
  }

  @Mutation('updatePerson')
  update(@Args('updatePersonInput') updatePersonInput: UpdatePersonInput) {
    return this.personsService.update(
      updatePersonInput.personId,
      updatePersonInput,
    );
  }

  @Mutation('removePerson')
  removeUser(@Args('personId') personId: string) {
    return this.personsService.remove(personId);
  }
}
