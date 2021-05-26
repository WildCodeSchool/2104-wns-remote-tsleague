import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
class User {
  @Field(() => ID)
  id: number = 0;

  @Field()
  name: string = '';

  @Field()
  firstname: string = '';

  @Field()
  birthday: string = '';

  @Field()
  mail: string = '';

  @Field()
  password: string = '';

  @Field()
  role: string = '';
}

export default User;
