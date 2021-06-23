import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server';
import UserResolver from './resolvers/user-resolver';
import configServer from './config/server-config';

export async function startServer(config: any): Promise<ApolloServer> {
  const schema = await buildSchema({ resolvers: [UserResolver] });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  try {
    await server.listen(config.apolloPort);
    console.log(
      `Apollo server started at: http://localhost:${config.apolloPort}/`
    );
  } catch (error: any) {
    throw new Error(`Unable to start Apollo server: ${error.message}`);
  }
  try {
    await mongoose.connect(config.uri, config.options);
  }catch(error){
    console.log(error)
  }


  if (config.verbose) console.log('mongodb started at uri: ', config.uri);
  return server;
}

startServer(configServer.prod);

export default startServer;
