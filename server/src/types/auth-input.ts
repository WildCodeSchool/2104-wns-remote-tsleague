import { Field, InputType } from 'type-graphql';

@InputType()
export default class AuthRegisterInput {
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
}
