import { Injectable, Inject } from '@nestjs/common';
import { CreateDisciplineInput } from '../dtos/create-discipline.input';
import { UpdateDisciplineInput } from '../dtos/update-discipline.input';
import { Repository } from 'typeorm';
import { Discipline } from '../entities/discipline.entity';
import { v4 } from 'uuid';

@Injectable()
export class DisciplinesService {
  constructor(
    @Inject('DISCIPLINE_REPOSITORY')
    private disciplineRepository: Repository<Discipline>,
  ) {}

  async createDiscipline(createDisciplineInput: CreateDisciplineInput) {
    const discipline: Discipline = {
      disciplineId: v4(),
      createdAt: new Date(),
      name: createDisciplineInput.name,
      updatedAt: null,
      //icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    const result = await this.disciplineRepository.save(discipline);
    return result;
  }

  findOne(disciplineId: string) {
    return this.disciplineRepository.findOne({ where: { disciplineId } });
  }
  async findByName(name: string) {
    const result = await this.disciplineRepository.findOne({ where: { name } });
    // if (!result) throw new Error('discipline not found');
    return result;
  }

  async findAllDisciplines() {
    const result = await this.disciplineRepository.find();
    return result;
  }

  async update(
    disciplineId: string,
    updateDisciplineInput: UpdateDisciplineInput,
  ): Promise<Discipline> {
    const discipline = await this.disciplineRepository.findOne({
      where: { disciplineId },
    });
    if (!discipline) {
      throw new Error('discipline not found!');
    }
    const result = await this.disciplineRepository.update(
      disciplineId,
      updateDisciplineInput,
    );
    if (!result.affected) {
      throw new Error('discipline not updated!');
    }
    return discipline;
  }

  async remove(disciplineId: string): Promise<boolean> {
    const result = await this.disciplineRepository.delete(disciplineId);
    return result.affected ? true : false;
  }
}
