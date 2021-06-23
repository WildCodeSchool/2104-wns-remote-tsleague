/* eslint-disable class-methods-use-this */
import { Resolver, Query, Arg } from 'type-graphql';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/user-model';

const users = [
  {
    id: 1,
    lastname: 'Dupont',
    firstname: 'Louis',
    birthday: '20/04/1995',
    mail: 'louisdupont@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'admin',
  },
  {
    id: 2,
    lastname: 'Dupont',
    firstname: 'Louis',
    birthday: '20/04/1995',
    mail: 'louisdupont@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'student',
  },
  {
    id: 3,
    lastname: 'Dupont',
    firstname: 'Louis',
    birthday: '20/04/1995',
    mail: 'louisdupont@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'teacher',
  },
];

const UserModel = getModelForClass(User);
@Resolver(User)
class UserResolver {
  @Query(() => User)
  getUserById(id: string) {
    // return users.filter((user) => user.id === parseInt(id, 10))[0];
    return UserModel.find();
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
