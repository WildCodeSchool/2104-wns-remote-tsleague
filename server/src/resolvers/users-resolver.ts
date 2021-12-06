/* eslint-disable class-methods-use-this */
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { UserModel, User } from '../models/users-model';
import bcrypt from 'bcrypt';
import { UserInput, ResetPasswordInput } from './validator/userInput';

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

  @Mutation(() => User)
  public async createUser(@Arg('input') userInput: UserInput) {
    await UserModel.init();
    const user = new UserModel(userInput);
    await user.save();
    return user;
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

  @Mutation(() => ResetPasswordInput)
  async updateUserPassword(
    @Arg('body')
    { mail, password }: ResetPasswordInput,
  ) {
    // const hashedPassword: string = await bcrypt.hash(password, 10);
    const user = await UserModel.findOneAndUpdate(
      { email: mail },
      { password: password },
      {
        new: true,
      },
    );

    return user;
  }
}

export default UserResolver;
