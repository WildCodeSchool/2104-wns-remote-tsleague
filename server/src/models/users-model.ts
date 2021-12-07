import {
  prop as Property,
  modelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose';
import { ObjectType, Field, ID } from 'type-graphql';

@modelOptions({
  schemaOptions: { collection: 'users' },
  options: { allowMixed: Severity.ALLOW },
})
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

  @Property({ required: true, unique: true })
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
  classrooms!: string[];
}

export const UserModel = getModelForClass(User);
