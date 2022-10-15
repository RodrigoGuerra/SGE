import { Injectable, Inject } from '@nestjs/common';
import { CreateSchoolInput } from '../dtos/create-school.input';
import { UpdateSchoolInput } from '../dtos/update-school.input';
import { Repository } from 'typeorm';
import { School } from '../entities/school.entity';
import { v4 } from 'uuid';

@Injectable()
export class SchoolsService {
  constructor(
    @Inject('SCHOOL_REPOSITORY')
    private schoolRepository: Repository<School>,
  ) {}

  async createSchool(createSchoolInput: CreateSchoolInput) {
    const school: School = {
      schoolId: v4(),
      createdAt: new Date(),
      name: createSchoolInput.name,
      managerId: createSchoolInput.managerId,
      teams: [],
      updatedAt: null,
      //icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    const result = await this.schoolRepository.save(school);
    return result;
  }

  findOne(schoolId: string) {
    return this.schoolRepository.findOne({ where: { schoolId } });
  }
  async findByName(name: string) {
    const result = await this.schoolRepository.findOne({ where: { name } });
    // if (!result) throw new Error('discipline not found');
    return result;
  }

  async findAllSchoolsByManager(managerId: string) {
    const result = await this.schoolRepository.find({
      where: {
        managerId: managerId,
      },
    });
    return result;
  }

  async update(
    schoolId: string,
    updateSchoolInput: UpdateSchoolInput,
  ): Promise<School> {
    const school = await this.schoolRepository.findOne({
      where: { schoolId },
    });
    if (!school) {
      throw new Error('School not found!');
    }
    const result = await this.schoolRepository.update(
      schoolId,
      updateSchoolInput,
    );
    if (!result.affected) {
      throw new Error('School not updated!');
    }
    return school;
  }

  async remove(schoolId: string): Promise<boolean> {
    const result = await this.schoolRepository.delete(schoolId);
    return result.affected ? true : false;
  }
}
