/* eslint-disable class-methods-use-this */
import { ArgsType, Resolver, Query } from 'type-graphql';
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

@Resolver(User)
class UserResolver {
  @Query(() => User)
  getUserById(id: string) {
    return users.filter((user) => user.id === parseInt(id, 10))[0];
  }

  @Query(() => [User])
  getAllUsers(args: User) {
    if (args?.role) return users.filter((user) => user.role === args.role)[0];
    return users;
  }
}

export default UserResolver;
