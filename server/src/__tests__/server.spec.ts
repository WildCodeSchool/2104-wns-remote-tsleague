import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { startServer } from '../server';
import config from '../config/server-config';

describe('src/server', () => {
  afterEach(async () => {});
  it.skip('should run server with according config', async () => {
    jest.mock('apollo-server');
    jest.mock('type-graphql');
    const res = await startServer(config.test);
    expect(buildSchema).toBeCalledTimes(1);
    expect(res).toBeInstanceOf(ApolloServer);
  });
});
