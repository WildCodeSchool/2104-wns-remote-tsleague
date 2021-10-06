import 'reflect-metadata';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
<<<<<<< HEAD

import { ApolloServer } from 'apollo-server';
import UserResolver from './resolvers/user-resolver';
import configServer from './config/server-config';

dotenv.config();

export async function startServer(config: any): Promise<ApolloServer> {
  const schema = await buildSchema({ resolvers: [UserResolver] });

  const server = new ApolloServer({
    schema,
    playground: true,
=======
import { ApolloServer } from 'apollo-server';

import type { ServerConfig } from './config/server-config';

import UserResolver from './resolvers/users-resolver';
import ClassroomResolver from './resolvers/classrooms-resolver';

dotenv.config();

export default async function startServer(
  config: ServerConfig,
): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [UserResolver, ClassroomResolver],
  });
  const server = new ApolloServer({
    schema,
>>>>>>> c73b6fc6bb6853ccbceade4f80e88553f832dafe
  });

  try {
    await server.listen(config.apolloPort);
    console.log(
<<<<<<< HEAD
      `Apollo server started at: http://localhost:${config.apolloPort}/`
=======
      `Apollo server started at: http://localhost:${config.apolloPort}/`,
>>>>>>> c73b6fc6bb6853ccbceade4f80e88553f832dafe
    );
  } catch (error: any) {
    throw new Error(`Unable to start Apollo server: ${error.message}`);
  }
  try {
<<<<<<< HEAD
    await mongoose.connect(config.uri, config.options);
=======
    await mongoose
      .connect(config.uri, config.options)
      .then(() => console.log('Connected to database'));
>>>>>>> c73b6fc6bb6853ccbceade4f80e88553f832dafe
  } catch (error) {
    console.log(error);
  }

  if (config.verbose) console.log('mongodb started at uri: ', config.uri);
  return server;
}
<<<<<<< HEAD

startServer(configServer.dev);

export default startServer;
=======
>>>>>>> c73b6fc6bb6853ccbceade4f80e88553f832dafe
