/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import uuid from 'short-uuid';

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

    let user = new UserModel({
      lastname,
      firstname,
      mail,
      password: hashedPassword,
      classrooms: [{ id: '', name: classroom }],
      role,
    });

    await user.save();

    switch (role) {
      case 'teacher':
        let newClassroom = new ClassroomModel({
          name: classroom,
          teachers: {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
          },
        });
        await newClassroom.save();

        user = await UserModel.findOneAndUpdate(
          { _id: user._id },
          { classrooms: [{ id: newClassroom._id, name: newClassroom.name }] },
          {
            new: true,
          },
        );

        await user.save();

        // ONLY FOR ROOM TESTING
        const studentUserId1: string = await uuid.generate();
        const studentUserId2: string = await uuid.generate();

        const studentUser1 = new UserModel({
          lastname: studentUserId1,
          firstname: 'user',
          mail: `user.${studentUserId1}@gmail.com`,
          password: hashedPassword,
          classrooms: [{ id: newClassroom._id, name: newClassroom.name }],
          role: 'student',
        });

        const studentUser2 = new UserModel({
          lastname: studentUserId2,
          firstname: 'user',
          mail: `user.${studentUserId2}@gmail.com`,
          password: hashedPassword,
          classrooms: [{ id: newClassroom._id, name: newClassroom.name }],
          role: 'student',
        });

        await studentUser1.save();
        await studentUser2.save();

        newClassroom = await ClassroomModel.findOneAndUpdate(
          { _id: newClassroom._id },
          {
            students: [
              {
                id: studentUser1._id,
                firstname: studentUser1.firstname,
                lastname: studentUser1.lastname,
              },
              {
                id: studentUser2._id,
                firstname: studentUser2.firstname,
                lastname: studentUser2.lastname,
              },
            ],
          },
          {
            new: true,
          },
        );
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

        return { id: user._id, ...user._doc, createdClassroom: newClassroom };
        break;
      case 'student':
        await ClassroomModel.findOneAndUpdate(
          { name: classroom },
          { $push: { students: user } },
          {
            new: true,
          },
        );

        await sendMail({
          templateName: 'studentRegister',
          mail,
          firstname,
          lastname,
        });
        break;
      default:
        throw new Error("L'utilisateur n'a pas de rôle identifiable");
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
