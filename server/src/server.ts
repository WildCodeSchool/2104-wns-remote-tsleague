import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import { ApolloServer } from 'apollo-server';
import UserResolver from './UserResolver';

const port = process.env.PORT || 5000;

async function start() {
  const schema = await buildSchema({ resolvers: [UserResolver] });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
