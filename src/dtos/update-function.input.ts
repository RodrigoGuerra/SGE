import { CreateFunctionInput } from './create-function.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFunctionInput extends PartialType(CreateFunctionInput) {
  functionId: string;
}
