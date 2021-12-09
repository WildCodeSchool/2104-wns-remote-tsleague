/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Resolver, Mutation, Arg } from 'type-graphql';
import {
  AuthRegisterInput,
  AuthRegisterResponse,
  AuthLoginInput,
} from '../types/authentication';
import { UserModel } from '../models/users-model';
import { Classroom, ClassroomModel } from '../models/classrooms-model';
import sendMail from '../utils/mailing/send';
import ClassroomResolver from './classrooms-resolver';

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

    switch (role) {
      case 'teacher':
        const newClassroom = new ClassroomModel({
          name: classroom,
          teachers: user,
        });
        await newClassroom.save();

        await sendMail({
          templateName: 'teacherRegister',
          data: { lastname, firstname, mail },
        });
        break;
      case 'student':
        await ClassroomModel.findOneAndUpdate(
           { classroom },
           { students: user },
            {
             new: true,
            },
          );
                
        await sendMail({
          templateName: 'studentRegister',
           data: { lastname, firstname, classroom, mail },
         });
        break;
      default:
        throw new Error(
          "L'utilisateur n'a pas de rôle identifiable"
        );
    }

    const token: string = jwt.sign(
      { id: user._id, mail },
      process.env.JWT_SECRET_KEY || 'secretOrPrivateKey',
    );
    console.log(user);
    return { id: user._id, ...user._doc, token };
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
