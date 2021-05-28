import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server';
import UserResolver from './resolvers/user-resolver';

export async function startServer(config: any): Promise<ApolloServer> {
  const schema = await buildSchema({ resolvers: [UserResolver] });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  try {
    await server.listen(config.apolloPort);
    console.log(
      `Apollo server started at: http://localhost:${config.apolloPort}/`,
    );
  } catch (error) {
    throw new Error(`Unable to start Apollo server: ${error.message}`);
  }

  await mongoose.connect(config.uri, config.options);

  if (config.verbose) console.log('mongodb started at uri: ', config.uri);
  return server;
}

export default startServer;
