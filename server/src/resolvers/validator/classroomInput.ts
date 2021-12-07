import { InputType, Field } from 'type-graphql';

@InputType()
export default class ClassroomInput {
  readonly id!: string;

  @Field()
  name!: string;
}
