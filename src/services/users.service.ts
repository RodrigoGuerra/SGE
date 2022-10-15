import { Injectable, Inject } from '@nestjs/common';
import { CreateUserInput } from '../dtos/create-user.input';
import { UpdateUserInput } from '../dtos/update-user.input';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { v4 } from 'uuid';
import { School } from '../entities/school.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  createUser(createUserInput: CreateUserInput) {
    const user: User = {
      userId: v4(),
      createdAt: new Date(),
      email: createUserInput.email,
      name: createUserInput.name,
      roleId: createUserInput.roleId,
      updatedAt: null,
      //icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    return this.userRepository.save(user);
  }

  findOne(userId: string) {
    return this.userRepository.findOne({ where: { userId } });
  }
  async findByEmail(email: string) {
    const result = await this.userRepository.findOne({ where: { email } });
    // if (!result) throw new Error('User not found');
    return result;
  }

  async update(
    userId: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userRepository.findOne({ where: { userId } });
    if (!user) {
      throw new Error('User not found!');
    }
    const result = await this.userRepository.update(userId, updateUserInput);
    if (!result.affected) {
      throw new Error('User not updated!');
    }
    return user;
  }

  async remove(userId: string): Promise<boolean> {
    const result = await this.userRepository.delete(userId);
    return result.affected ? true : false;
  }

}
