/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { UserModel, User } from '../models/users-model';
import { UserInput, ResetPasswordInput } from '../types/userInput';
import sendMail from '../utils/mailing/send';

// TODO => Handle error
@Resolver(User)
class UserResolver {
  @Query(() => [User])
  getAllUsers() {
    return UserModel.find();
  }

  @Query(() => User)
  getUserById(@Arg('id', {}) id: string) {
    return UserModel.findById(id);
  }

  @Query(() => [User])
  getUsersByRole(@Arg('role', () => String) role: string) {
    return UserModel.find({ role });
  }

  @Mutation(() => User, { nullable: true })
  async forgotPassword(@Arg('email', () => String) mail: string) {
    const user = await UserModel.findOne({ mail });
    if (!user) {
      throw new Error(
        "L'email renseigné n'existe pas, merci d'en utiliser un autre",
      );
    }
    const token: string = jwt.sign(
      { mail },
      process.env.JWT_SECRET_KEY || 'secretOrPrivateKey',
      { expiresIn: '1h' },
    );
    await sendMail({
      templateName: 'forgotPassword',
      mail,
      additionalParameters: { token },
    });
  }

  @Mutation(() => User, { nullable: true })
  async sendEmailNewStudent(
    @Arg('email', () => String) mail: string,
    @Arg('classroom', () => String) classroom: string,
  ) {
    // const token: string = jwt.sign(
    //   { mail },
    //   process.env.JWT_SECRET_KEY || 'secretOrPrivateKey',
    //   { expiresIn: '1h' },
    // );

    await sendMail({
      templateName: 'studentAdded',
      mail,
      additionalParameters: { classroom },
    });
  }

  @Mutation(() => User)
  public async updateUser(@Arg('input') userInput: UserInput) {
    const user = await UserModel.findOneAndUpdate(
      { _id: userInput.id },
      userInput,
      {
        new: true,
      },
    );
    return user;
  }

  @Mutation(() => User, { nullable: true })
  public async deleteUser(@Arg('id', () => String) id: string) {
    const user = await UserModel.findOneAndDelete({ _id: id });
    return user;
  }

  @Mutation(() => User)
  async updateUserPassword(
    @Arg('body')
    { mail, password }: ResetPasswordInput,
  ) {
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const user = await UserModel.findOneAndUpdate(
      { mail },
      { password: hashedPassword },
      {
        new: true,
      },
    );
    return user;
  }
}

export default UserResolver;
