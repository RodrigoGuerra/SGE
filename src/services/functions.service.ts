import { Injectable, Inject } from '@nestjs/common';
import { CreateFunctionInput } from '../dtos/create-function.input';
import { UpdateFunctionInput } from '../dtos/update-function.input';
import { Repository } from 'typeorm';
import { Functions } from '../entities/function.entity';
import { v4 } from 'uuid';

@Injectable()
export class FunctionsService {
  constructor(
    @Inject('FUNCTION_REPOSITORY')
    private functionRepository: Repository<Functions>,
  ) {}

  createFunction(createFunctionInput: CreateFunctionInput) {
    const func: Functions = {
      functionId: v4(),
      createdAt: new Date(),
      name: createFunctionInput.name,
      updatedAt: null,
      //icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    return this.functionRepository.save(func);
  }

  findOne(functionId: string) {
    return this.functionRepository.findOne({ where: { functionId } });
  }
  async findByName(name: string) {
    const result = await this.functionRepository.findOne({ where: { name } });
    //if (!result) throw new Error('Function not found');
    return result;
  }

  async update(
    functionId: string,
    updateFunctionInput: UpdateFunctionInput,
  ): Promise<Functions> {
    const func = await this.functionRepository.findOne({
      where: { functionId },
    });
    if (!func) {
      throw new Error('Function not found!');
    }
    const result = await this.functionRepository.update(
      functionId,
      updateFunctionInput,
    );
    if (!result.affected) {
      throw new Error('Function not updated!');
    }
    return func;
  }

  async remove(functionId: string): Promise<boolean> {
    const result = await this.functionRepository.delete(functionId);
    return result.affected ? true : false;
  }
}
