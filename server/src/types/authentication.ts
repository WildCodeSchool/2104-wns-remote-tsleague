/* eslint-disable max-classes-per-file */
import { Field, InputType, ObjectType } from 'type-graphql';
import { Classroom } from '../models/classrooms-model';
import { UserClassroom } from '../resolvers/validator/classroomInput';

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
export class AuthLoginInput {
  @Field()
  mail!: string;

  @Field()
  password!: string;
}

@ObjectType()
export class AuthRegisterResponse {
  @Field()
  id!: string;

  @Field()
  lastname!: string;

  @Field()
  firstname!: string;

  @Field()
  role!: string;

  @Field(() => [Classroom])
  classrooms!: Classroom[];

  @Field()
  token!: string;

  @Field()
  createdClassroom?: Classroom;
}
