import { prop as Property, modelOptions } from '@typegoose/typegoose';
import { ObjectType, Field, ID } from 'type-graphql';
import UserClassroomData from './user-classroom-data-models';

@modelOptions({ schemaOptions: { collection: 'classrooms' } })
@ObjectType()
class Classroom {
  @Field(() => ID)
  readonly id!: string;

  @Property({ required: true })
  @Field()
  name!: string;

  @Property({ required: false })
  @Field(() => [UserClassroomData])
  students!: UserClassroomData[];

  @Property({ required: false })
  @Field(() => [UserClassroomData])
  teachers!: UserClassroomData[];

  @Property({ required: false })
  @Field(() => [UserClassroomData])
  admins!: UserClassroomData[];
}

export default Classroom;
