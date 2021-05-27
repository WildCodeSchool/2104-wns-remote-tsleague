import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import { ApolloServer } from 'apollo-server';
import UserResolver from './resolvers/user-resolver';

import mocks from './mocks/users';

const port = process.env.PORT || 5000;

async function start() {
  const schema = await buildSchema({ resolvers: [UserResolver] });

  const server = new ApolloServer({
    mocks,
    schema,
    playground: true,
  });

  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
