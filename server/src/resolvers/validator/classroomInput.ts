import { InputType, Field, ID } from 'type-graphql';

@InputType()
export default class ClassroomInput {
  @Field(() => ID)
  readonly id!: string;

  @Field()
  name!: string;
}
