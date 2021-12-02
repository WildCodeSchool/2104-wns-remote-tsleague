import 'reflect-metadata';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server';
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import jwt from 'jsonwebtoken';

import type { ServerConfig } from './config/server-config';

import UserResolver from './resolvers/users-resolver';
import ClassroomResolver from './resolvers/classrooms-resolver';
import AuthResolver from './resolvers/auth-resolver';

dotenv.config();

export default async function startServer(
  config: ServerConfig,
): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [UserResolver, ClassroomResolver, AuthResolver],
  });
  console.log('env:', process.env.SMTP_USER)
  const server = new ApolloServer({
    schema,
    validationRules: [],
    context: ({ req }) => {
      if (!['Login', 'Register'].includes(req.body.operationName)) {
        const token = req.headers.authorization || '';
        try {
          const { id, mail } = jwt.verify(
            token.split(' ')[1],
            process.env.SECRET_KEY || 'secretOrPrivateKey',
          );
          return { id, mail };
        } catch (e) {
          throw new AuthenticationError(
            'Authentication token is invalid, please log in',
          );
        }
      }
      return {};
    },
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
