import { InputType, Field } from 'type-graphql';

@InputType()
export default class TeacherClassroomInput {
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

  role!: string;

  @Field(() => [String])
  classrooms!: string[];
}
