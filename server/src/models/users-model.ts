import { prop as Property, modelOptions } from '@typegoose/typegoose';
import { ObjectType, Field, ID } from 'type-graphql';

@modelOptions({ schemaOptions: { collection: 'users' } })
@ObjectType()
export class User {
  @Field(() => ID)
  readonly id!: string;

  @Property({ required: true })
  @Field()
  lastname!: string;

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

  @Property({ required: true })
  @Field(() => [String])
  classrooms!: string[]; // TODO correct to array of string type
}

export default User;
