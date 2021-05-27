/* eslint-disable class-methods-use-this */
import { Args, Resolver, Query } from 'type-graphql';
import { User } from '../models/user-model';

const users = [
  {
    id: 1,
    name: 'Dupont',
    firstname: 'Louis',
    birthday: '20/04/1995',
    mail: 'louisdupont@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Dupont',
    firstname: 'Louis',
    birthday: '20/04/1995',
    mail: 'louisdupont@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'student',
  },
  {
    id: 3,
    name: 'Dupont',
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
  getUserById(@Args('id')) {
    const { id } = args;
    console.log(users.filter((user) => user.id === id)[0]);
    return users.filter((user) => user.id === id)[0];
  }

  @Query(() => [User])
  getAllUsers(args: any) {
    if (args?.role) return users.filter((user) => user.role === args.role)[0];
    return users;
  }
}

export default UserResolver;
