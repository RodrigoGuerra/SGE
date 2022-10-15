import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SchoolsService } from '../services/schools.service';
import { CreateSchoolInput } from '../dtos/create-school.input';
import { UpdateSchoolInput } from '../dtos/update-school.input';

@Resolver('Schools')
export class SchoolsResolver {
  constructor(private readonly schoolsService: SchoolsService) {}
  @Mutation('createSchool')
  create(@Args('createSchoolInput') createSchoolInput: CreateSchoolInput) {
    if (!createSchoolInput.name) {
      throw new Error('Name is required');
    }
    return this.schoolsService.createSchool(createSchoolInput);
  }

  @Query('schoolByName')
  findOne(@Args('name') name: string) {
    if (!name) throw new Error('Name not recive!');
    return this.schoolsService.findByName(name);
  }

  @Query('schoolsByManager')
  findAllSchoolsByManager(@Args('managerUserId') managerUserId: string) {
    return this.schoolsService.findAllSchoolsByManager(managerUserId);
  }

  @Mutation('updateSchool')
  update(@Args('updateSchoolInput') updateSchoolInput: UpdateSchoolInput) {
    return this.schoolsService.update(
      updateSchoolInput.schoolId,
      updateSchoolInput,
    );
  }

  @Mutation('removeSchool')
  removeSchool(@Args('schoolId') schoolId: string) {
    return this.schoolsService.remove(schoolId);
  }
}