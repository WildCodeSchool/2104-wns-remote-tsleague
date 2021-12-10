/* eslint-disable max-classes-per-file */
import { InputType, Field, ObjectType } from 'type-graphql';

@InputType()
export class ClassroomInput {
  readonly id!: string;

  @Field()
  name!: string;
}

@ObjectType()
export class UserClassroom {
  readonly id!: string;

  @Field()
  name!: string;
}
