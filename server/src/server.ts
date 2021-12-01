import 'reflect-metadata';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server';
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
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      if (req.body.operationName !== 'Login') {
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
