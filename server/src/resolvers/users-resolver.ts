/* eslint-disable class-methods-use-this */
import { Resolver, Query, Arg } from 'type-graphql';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/users-model';

const UserModel = getModelForClass(User);

@Resolver(User)
class UserResolver {
  @Query(() => User)
  getUserById(@Arg('id', {}) id: string) {
    return UserModel.findById(id);
  }

  @Query(() => [User])
  async getAllUsers() {
    return UserModel.find();
  }

  @Query(() => [User])
  getAllUsersByRole(@Arg('role', () => String) role: string) {
    const usersFind = users.filter((user) => user.role === role);
    if (usersFind.length > 0) return usersFind;
    return null;
  }
}

export default UserResolver;
