/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import uuid from 'uuid';

import { Resolver, Mutation, Arg } from 'type-graphql';
import {
  AuthRegisterInput,
  AuthRegisterResponse,
  AuthLoginInput,
} from '../types/authentication';
import { UserModel } from '../models/users-model';
import { ClassroomModel } from '../models/classrooms-model';
import sendMail from '../utils/mailing/send';

@Resolver()
class AuthResolver {
  @Mutation(() => AuthRegisterResponse)
  async register(
    @Arg('body')
    { lastname, firstname, password, mail, classroom, role }: AuthRegisterInput,
  ): Promise<AuthRegisterResponse> {
    const isAlreadyRegisteredUser = await UserModel.findOne({ mail });

    if (isAlreadyRegisteredUser) {
      throw new Error(
        "L'email renseigné existe déjà, merci d'en utiliser un autre",
      );
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const user = new UserModel({
      lastname,
      firstname,
      mail,
      password: hashedPassword,
      classrooms: [classroom],
      role,
    });

    await user.save();

    if (role === 'teacher') {
      const newClassroom = new ClassroomModel({
        name: classroom,
        teachers: user,
      });
      await newClassroom.save();

      // ONLY FOR ROOM TESTING
      const studentUserId1: string = uuid.v1();
      const studentUserId2: string = uuid.v1();

      const studentUser1 = new UserModel({
        lastname: studentUserId1,
        firstname: 'user',
        mail: `user.${studentUserId1}@gmail.com`,
        password: hashedPassword,
        classrooms: [classroom],
        role: 'student',
      });

      const studentUser2 = new UserModel({
        lastname: studentUserId2,
        firstname: 'user',
        mail: `user.${studentUserId2}@gmail.com`,
        password: hashedPassword,
        classrooms: [classroom],
        role: 'student',
      });

      await studentUser1.save();
      await studentUser2.save();

      // END FOR ROOM TESTING

      await sendMail({
        templateName: 'teacherRegister',
        mail,
        firstname,
        lastname,
        additionalParameters: {
          studentUser1: `user.${studentUserId1}@gmail.com`,
          studentUser2: `user.${studentUserId2}@gmail.com`,
        },
      });
      return { id: user._id, ...user._doc, ...newClassroom };
    }

    return { id: user._id, ...user._doc };
  }

  @Mutation(() => AuthRegisterResponse)
  async login(
    @Arg('body')
    { mail, password }: AuthLoginInput,
  ): Promise<AuthRegisterResponse> {
    const user = await UserModel.findOne({ mail });

    if (!user) {
      throw new Error('Wrong password or email does not exist');
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error('Wrong password or email does not exist');
    }

    const token: string = jwt.sign(
      { id: user._id, mail },
      process.env.JWT_SECRET_KEY || 'secretOrPrivateKey',
    );

    return { id: user._doc._id, ...user._doc, token };
  }
}

export default AuthResolver;
