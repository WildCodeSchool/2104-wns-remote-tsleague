import { Resolver, Mutation } from 'type-graphql';
import { UserModel } from '../models/users-model';

@Resolver()
class AuthResolver {
  @Mutation(() => UserModel)
  async register(
    @Arg('input')
    { email, password, lastname, firstname }: typeof UserModel,
  ): Promise<UserResponse> {
    // check for existing user attached to this email
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) throw new Error('Email already in use');

    const existingNickname = await UserModel.findOne({ nickname });

    if (existingNickname) throw new Error('Nickname already taken');

    // register user with hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ email, nickname, password: hashedPassword });
    await user.save();

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(
      payload,
      process.env.SESSION_SECRET || 'testuntilweputdotenv',
    );

    return { user, token };
  }
}

export