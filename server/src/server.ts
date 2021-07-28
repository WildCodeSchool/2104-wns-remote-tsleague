import 'reflect-metadata';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server';
import UserResolver from './resolvers/users-resolver';
import ClassroomResolver from './resolvers/classrooms-resolver';
import configServer from './config/server-config';

dotenv.config();

export async function startServer(config: any): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [UserResolver, ClassroomResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  try {
    await server.listen(config.apolloPort);
    console.log(
      `Apollo server started at: http://localhost:${config.apolloPort}/`,
    );
  } catch (error: any) {
    throw new Error(`Unable to start Apollo server: ${error.message}`);
  }
  try {
    await mongoose.connect(config.uri, config.options);
  } catch (error) {
    console.log(error);
  }

  if (config.verbose) console.log('mongodb started at uri: ', config.uri);
  return server;
}

startServer(configServer.dev);

export default startServer;
