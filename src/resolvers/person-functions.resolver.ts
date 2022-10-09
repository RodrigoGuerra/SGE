import { Resolver } from '@nestjs/graphql';
import { PersonFunctionsService } from '../services/person-functions.service';

@Resolver('PersonFunctions')
export class PersonFunctionsResolver {
  constructor(
    private readonly personFunctionsService: PersonFunctionsService,
  ) {}
}
