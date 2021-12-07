import 'reflect-metadata';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
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
    plugins: [
      // Install a landing page plugin based on NODE_ENV
      process.env.SERVER_STAGE === 'prod'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageLocalDefault(),
    ],
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
    await mongoose
      .connect(config.uri, config.options)
      .then(() => console.log('Connected to database'));
  } catch (error) {
    console.log(error);
  }

  if (config.verbose) console.log('mongodb started at uri: ', config.uri);
  return server;
}
