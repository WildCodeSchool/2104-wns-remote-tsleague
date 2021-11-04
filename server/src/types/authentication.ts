/* eslint-disable max-classes-per-file */
import { Field, InputType, InterfaceType } from 'type-graphql';

@InputType()
export class AuthRegisterInput {
  @Field()
  lastname!: string;

  @Field()
  firstname!: string;

  @Field()
  mail!: string;

  @Field()
  password!: string;

  @Field()
  role!: string;

  @Field()
  classroom!: string;
}

@InputType()
export class AuthRegisterResponse {
  @Field()
  lastname!: string;

  @Field()
  firstname!: string;

  @Field()
  mail!: string;

  @Field()
  password!: string;

  @Field()
  role!: string;

  @Field(() => [String])
  classrooms!: string[];

  @Field()
  token!: string;
}
