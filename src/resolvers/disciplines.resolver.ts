import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DisciplinesService } from '../services/disciplines.service';
import { CreateDisciplineInput } from '../dtos/create-discipline.input';
import { UpdateDisciplineInput } from '../dtos/update-discipline.input';

@Resolver('Disciplines')
export class DisciplinesResolver {
  constructor(private readonly disciplinesService: DisciplinesService) {}
  @Mutation('createDiscipline')
  create(
    @Args('createDisciplineInput') createDisciplineInput: CreateDisciplineInput,
  ) {
    if (!createDisciplineInput.name) {
      throw new Error('Name is required');
    }
    return this.disciplinesService.createDiscipline(createDisciplineInput);
  }

  @Query('disciplineByName')
  findOne(@Args('name') name: string) {
    if (!name) throw new Error('name not recive!');
    return this.disciplinesService.findByName(name);
  }

  @Query('listDisciplines')
  findAllDisciplines() {
    return this.disciplinesService.findAllDisciplines();
  }

  @Mutation('updateDiscipline')
  update(
    @Args('updateDisciplineInput') updateDisciplineInput: UpdateDisciplineInput,
  ) {
    return this.disciplinesService.update(
      updateDisciplineInput.disciplineId,
      updateDisciplineInput,
    );
  }

  @Mutation('removeDiscipline')
  removeDiscipline(@Args('disciplineId') disciplineId: string) {
    return this.disciplinesService.remove(disciplineId);
  }
}
