import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FunctionsService } from '../services/functions.service';
import { CreateFunctionInput } from '../dtos/create-function.input';
import { UpdateFunctionInput } from '../dtos/update-function.input';

@Resolver('Functions')
export class FunctionsResolver {
  constructor(private readonly functionsService: FunctionsService) {}
  @Mutation('createFunction')
  create(
    @Args('createFunctionInput') createFunctionInput: CreateFunctionInput,
  ) {
    if (!createFunctionInput.name) {
      throw new Error('Name is required');
    }
    return this.functionsService.createFunction(createFunctionInput);
  }

  @Query('functionByName')
  findOne(@Args('name') name: string) {
    if (!name) throw new Error('Name not recive!');
    return this.functionsService.findByName(name);
  }

  @Mutation('updateFunction')
  update(
    @Args('updateFunctionInput') updateFunctionInput: UpdateFunctionInput,
  ) {
    return this.functionsService.update(
      updateFunctionInput.functionId,
      updateFunctionInput,
    );
  }

  @Mutation('removeFunction')
  removeFunction(@Args('functionId') functionId: string) {
    return this.functionsService.remove(functionId);
  }
}
