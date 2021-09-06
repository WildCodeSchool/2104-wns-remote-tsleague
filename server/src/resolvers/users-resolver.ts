/* eslint-disable class-methods-use-this */
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { UserModel, User } from '../models/users-model';

// TODO => Handle error
@Resolver(User)
class UserResolver {
  // cette méthode est une query, çàd qu'elle va servir à la lecture de données
  // elle retourne tous les documents de type User
  @Query(() => [User])
  getAllUsers() {
    return UserModel.find();
  }

  @Query(() => User)
  getUser(@Arg('id', {}) id: string) {
    return UserModel.findById(id);
  }

  @Query(() => [User])
  getUsersByRole(@Arg('role', () => String) role: string) {
    return UserModel.find({ role });
  }

  // cette méthode est une mutation, çàd qu'elle va servir à écrire /modifier/supprimer de la donnée
  // elle retourne le User nouvellement crée
  // @Mutation(() => User)
  // public async createUser(
  //   @Arg('lastname') lastname: string,
  //   @Arg('firstname') firstname: string,
  //   @Arg('birthday') birthday: string,
  //   @Arg('mail') mail: string,
  //   @Arg('password') password: string,
  //   @Arg('role') role: string,
  //   @Arg('classrooms') classrooms: string[],
  // ) {
  //   await UserModel.init();
  //   const body: User = {
  //     lastname,
  //     firstname,
  //     birthday,
  //     mail,
  //     password,
  //     role,
  //     classrooms,
  //   };
  //   const model = new UserModel(body);
  //   const result = await model.save();
  //   return result;
  // }
  @Mutation(() => User)
  async createUser(
    @Arg('lastname') lastname: string,
    @Arg('firstname') firstname: string,
    @Arg('birthday') birthday: string,
    @Arg('mail') mail: string,
    @Arg('password') password: string,
    @Arg('role') role: string,
    @Arg('classrooms') classrooms: string[],
  ) {
    const user = await UserModel.create({
      lastname,
      firstname,
      birthday,
      mail,
      password,
      role,
      classrooms,
    });
    return user;
  }
}

export default UserResolver;

// "lastname": "john",
// "firstname": "doe",
// "birthday": "12/02/94",
// "mail": "johndoe@tes.com",
// "password": "test",
// "role": "student",
// "classrooms": [],
