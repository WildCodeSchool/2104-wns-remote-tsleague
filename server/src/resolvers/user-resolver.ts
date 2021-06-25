/* eslint-disable class-methods-use-this */
import { Resolver, Query, Arg } from 'type-graphql';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/user-model';

const users = [
  {
    lastname: 'Laporte',
    firstname: 'Sam',
    birthday: '20/04/1995',
    mail: 'laportesam@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'admin',
  },
  {
    lastname: 'Lachaise',
    firstname: 'Etienne',
    birthday: '20/04/1995',
    mail: 'etienne_lachaise@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'student',
  },
  {
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
