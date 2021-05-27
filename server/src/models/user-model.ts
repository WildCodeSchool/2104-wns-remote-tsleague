import { prop as Property } from '@typegoose/typegoose';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  readonly id = 0;

  @Property({ required: true })
  @Field()
  name!: string;

  @Property({ required: true })
  @Field()
  firstname!: string;

  @Property({ required: false })
  @Field()
  birthday!: string;

  @Property({ required: true })
  @Field()
  mail!: string;

  @Property({ required: true })
  @Field()
  password!: string;

  @Property({ required: true })
  @Field()
  role!: string;
}

export default User;
