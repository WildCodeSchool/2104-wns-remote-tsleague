import 'reflect-metadata';
import casual from 'casual';
import { gql } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server';

import startServer from '../server';
import { UserModel } from '../models/users-model';
import * as testConfig from '../config/test-config';

const GET_USERS_BY_ROLE = gql`
  query GetUsersByRole($role: String!) {
    getUsersByRole(role: $role) {
      lastname
      firstname
      mail
      role
    }
  }
`;
const GET_USER = gql`
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      lastname
      firstname
      mail
    }
  }
`;

const USER_MODEL_MOCK = () => ({
  lastname: casual.last_name,
  firstname: casual.first_name,
  mail: casual.email,
  birthday: casual.date(),
  password: casual.password,
  role: 'admin',
  classrooms: [casual.uuid],
});

describe('src/resolvers/user-resolver =>', () => {
  let apollo: ApolloServer;
  beforeAll(async () => {
    const serverConfig = await testConfig.initDatabase();
    apollo = await startServer(serverConfig);

    // insert multiple data in MongoMemorySever for test it
    await UserModel.insertMany([
      USER_MODEL_MOCK(),
      { ...USER_MODEL_MOCK(), _id: '60d35854ca586b08bd0234d9' },
      { ...USER_MODEL_MOCK(), role: 'student' },
      { ...USER_MODEL_MOCK(), role: 'teacher' },
    ]);
  });

  afterAll(async () => {
    testConfig.closeDatabase();
    apollo?.stop();
  });

  it('should return correct users according to their roles', async () => {
    const res = await apollo.executeOperation({
      query: GET_USERS_BY_ROLE,
      variables: { role: 'admin' },
    });
    expect(res.data?.getUsersByRole).toBeDefined();
    expect(res.data?.getUsersByRole).toHaveLength(2);
    expect(res.data?.getUsersByRole[0]).toHaveProperty('role', 'admin');
  });

  it('should return an empty array in case there are no user found with a specific role', async () => {
    const res = await apollo.executeOperation({
      query: GET_USERS_BY_ROLE,
      variables: { role: 'noExistedRole' },
    });
    expect(res.data?.getUsersByRole).toEqual([]);
  });

  it('should return one user with required id', async () => {
    const res = await apollo.executeOperation({
      query: GET_USER,
      variables: { id: '60d35854ca586b08bd0234d9' },
    });
    expect(res.data?.getUser).toBeDefined();
    expect(res.data?.getUser).toHaveProperty('id', '60d35854ca586b08bd0234d9');
    expect(res.data?.getUser).toHaveProperty('firstname');
    expect(res.data?.getUser).toHaveProperty('lastname');
  });
});
