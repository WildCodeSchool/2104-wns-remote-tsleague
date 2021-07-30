/* eslint-disable class-methods-use-this */
import { Resolver, Query, Arg } from 'type-graphql';
import { UserModel, User } from '../models/users-model';

// TODO => Handle error
@Resolver(User)
class UserResolver {
  @Query(() => User)
  getUser(@Arg('id', {}) id: string) {
    return UserModel.findById(id);
  }

  @Query(() => [User])
  getUsersByRole(@Arg('role', () => String) role: string) {
    return UserModel.find({ role });
  }
}

export default UserResolver;
