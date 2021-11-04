/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Resolver, Mutation, Arg } from 'type-graphql';
import type {
  AuthRegisterInput,
  AuthRegisterResponse,
} from '../types/authentication';
import { UserModel } from '../models/users-model';

@Resolver()
class AuthResolver {
  @Mutation(() => String)
  async register({
    lastname,
    firstname,
    password,
    mail,
    classroom,
    role,
  }: AuthRegisterInput): Promise<AuthRegisterResponse> {
    const hashedPassword: string = bcrypt.hash(password, 10);

    const user = new UserModel({
      lastname,
      firstname,
      mail,
      password: hashedPassword,
      classrooms: [classroom],
      role,
    });

    user.save();

    const token: string = jwt.sign({ user }, 'secretOrPrivateKey');

    return { ...user, token };
  }
}

export default AuthResolver;
