import 'reflect-metadata';
import { gql } from 'apollo-server-core';
import mongoose from 'mongoose';
import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server';
import { MongoMemoryServer } from 'mongodb-memory-server';
import config from '../../config/server-config';
import { startServer } from '../server';

const GET_ALL_USERS = gql`
  {
    getAllUsers {
      id
      lastname
      firstname
    }
  }
`;
const GET_USERS_BY_ROLE = gql`
  query GetUsersByRole($role: String!) {
    getAllUsersByRole(role: $role) {
      lastname
      firstname
      mail
      role
    }
  }
`;
const GET_USER = gql`
  {
    getUserById {
      id
      lastname
      firstname
      mail
    }
  }
`;

describe('src/resolvers/user =>', () => {
  let apollo: ApolloServer;
  let mongo: MongoMemoryServer = new MongoMemoryServer();
  beforeAll(async () => {
    mongo = new MongoMemoryServer();
    config.test.uri = await mongo.getUri();
    await mongoose.connect(config.test.uri, config.test.options);

    apollo = await startServer(config.test);
  });

  afterEach(async () => {
    await mongoose.disconnect();
    await mongo.stop();
    apollo?.stop();
  });

  it('should return all users with correct key', async () => {
    const { query } = createTestClient(apollo);
    const res = await query({ query: GET_ALL_USERS });

    const expectedProperty = ['id', 'lastname', 'firstname'];
    const properties = Object.keys(res.data.getAllUsers[0]);

    expect(res.data).toBeDefined();

    properties.forEach((property, index) => {
      expect(property).toEqual(expectedProperty[index]);
    });
  });

  it('should return correct users according to their roles', async () => {
    const { query } = createTestClient(apollo);
    const res = await query({
      query: GET_USERS_BY_ROLE,
      variables: { role: 'admin' },
    });
    expect(res.data.getAllUsersByRole).toBeDefined();
    expect(res.data.getAllUsersByRole[0]).toHaveProperty('role', 'admin');
  });

  it('should return null in case there are no user found with a specific role', async () => {
    const { query } = createTestClient(apollo);
    const res = await query({
      query: GET_USERS_BY_ROLE,
      variables: { role: 'noExistedRole' },
    });
    expect(res.data).toEqual(null);
  });

  it('should return one user with correct key', async () => {
    const { query } = createTestClient(apollo);
    const res = await query({ query: GET_USER });

    expect(res.data).toBeDefined();
  });
});
