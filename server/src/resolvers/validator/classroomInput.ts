import { InputType, Field, ID } from 'type-graphql';
// import UserClassroomData from '../../models/user-classroom-data-models';

// type UserClassroomData = {
//   id: number;
//   firstname: boolean;
//   lastname: boolean;
// };

@InputType()
export default class ClassroomInput {
  @Field(() => ID)
  readonly id!: string;

  @Field()
  name!: string;

  // @Field(() => [UserClassroomData])
  // students!: UserClassroomData[];

  // @Field(() => [UserClassroomData])
  // teachers!: UserClassroomData[];

  // @Field(() => [UserClassroomData])
  // admins!: UserClassroomData[];
}
