import 'reflect-metadata';
import casual from 'casual';
import { gql } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server';

import { startServer } from '../server';
import { ClassroomModel } from '../models/classrooms-model';
import * as testConfig from '../config/test-config';
import * as utils from '../utils';

const GET_CLASSROOM = gql`
  query GetClassroom($id: String!) {
    getClassroom(id: $id) {
      name
      students {
        lastname
        firstname
      }
      teachers {
        lastname
        firstname
      }
      admins {
        lastname
        firstname
      }
    }
  }
`;
const GET_CLASSROOMS = gql`
  query GetClassrooms($ids: [String!]!) {
    getClassrooms(ids: $ids) {
      name
    }
  }
`;

const CREATE_CLASSROOM = gql`
  mutation CreateCLassroom($name: String!) {
    createClassroom(name: $name) {
      name
    }
  }
`;

const userClassroomData = [
  { id: 'id', name: () => casual.uuid },
  { id: 'lastname', name: () => casual.last_name },
  { id: 'firstname', name: () => casual.first_name },
];

const CLASSROOM_MODEL_MOCK = () => ({
  name: `Classroom ${casual.name}`,
  students: utils.arrayOfCasual(5, userClassroomData),
  teachers: utils.arrayOfCasual(2, userClassroomData),
  admins: utils.arrayOfCasual(1, userClassroomData),
});

describe('src/resolvers/user-resolver =>', () => {
  let apollo: ApolloServer;
  beforeAll(async () => {
    const serverConfig = await testConfig.initDatabase();
    apollo = await startServer(serverConfig);

    // insert multiple data in MongoMemorySever for test it
    await ClassroomModel.insertMany([
      { ...CLASSROOM_MODEL_MOCK(), _id: '60d35854ca586b08bd0234d9' },
      { ...CLASSROOM_MODEL_MOCK(), _id: '50d35854ca586b08bd0234d9' },
      { ...CLASSROOM_MODEL_MOCK(), _id: '40d35854ca586b08bd0234d9' },
    ]);
  });

  afterAll(async () => {
    testConfig.closeDatabase();
    apollo?.stop();
  });

  it('should return one classroom with correct id', async () => {
    const res = await apollo.executeOperation({
      query: GET_CLASSROOM,
      variables: { id: '60d35854ca586b08bd0234d9' },
    });
    expect(res.data?.getClassroom).toBeDefined();
  });

  it('should return multiple classrooms according to input ids', async () => {
    const res = await apollo.executeOperation({
      query: GET_CLASSROOMS,
      variables: {
        ids: [
          '60d35854ca586b08bd0234d9',
          '50d35854ca586b08bd0234d9',
          '40d35854ca586b08bd0234d9',
        ],
      },
    });
    console.log(res);
    expect(res.data?.getClassrooms).toBeDefined();
    expect(res.data?.getClassrooms).toHaveLength(3);
  });

  it('should insert a classroom', async () => {
    const res = await apollo.executeOperation({
      query: CREATE_CLASSROOM,
      variables: { name: 'Classroom B' },
    });
    expect(res.data?.createClassroom.name).toEqual('Classroom B');
  });
});
