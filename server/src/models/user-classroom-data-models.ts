import { prop as Property } from '@typegoose/typegoose';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
class UserData {
  @Field(() => ID)
  readonly id!: string;

  @Property({ required: true })
  @Field()
  firstname!: string;

  @Property({ required: true })
  @Field()
  lastname!: string;
}

export default UserData;
