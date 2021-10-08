import { InputType, Field, ID } from 'type-graphql';

@InputType()
export default class UserInput {
  @Field(() => ID)
  readonly id!: string;

  @Field()
  lastname!: string;

  @Field()
  firstname!: string;

  @Field()
  birthday!: string;

  @Field()
  mail!: string;

  @Field()
  password!: string;

  @Field()
  role!: string;

  @Field(() => [String])
  classrooms!: string[];
}
