import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { CreateUserInput } from '../dtos/create-user.input';
import { UpdateUserInput } from '../dtos/update-user.input';
import { Authorize } from 'src/interceptor/authorize.interceptor';
import { UseGuards } from '@nestjs/common';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(Authorize)
  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    if (!createUserInput.email) {
      throw new Error('Email is required');
    }
    if (!createUserInput.name) {
      throw new Error('Name is required');
    }
    return this.usersService.createUser(createUserInput);
  }

  @UseGuards(Authorize)
  @Query('userByEmail')
  findOne(@Args('email') email: string) {
    if (!email) throw new Error('email not recive!');
    return this.usersService.findByEmail(email);
  }

  @UseGuards(Authorize)
  @Query('listUsers')
  findAllDisciplines() {
    return this.usersService.findAllUsers();
  }

  @UseGuards(Authorize)
  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.userId, updateUserInput);
  }

  @UseGuards(Authorize)
  @Mutation('removeUser')
  removeUser(@Args('userId') userId: string) {
    return this.usersService.remove(userId);
  }

}
