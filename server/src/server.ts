import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    name: 'Dupont',
    firstname: 'Louis',
    birthday: '20/04/1995',
    mail: 'louisdupont@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Dupont',
    firstname: 'Louis',
    birthday: '20/04/1995',
    mail: 'louisdupont@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'student',
  },
  {
    id: 3,
    name: 'Dupont',
    firstname: 'Louis',
    birthday: '20/04/1995',
    mail: 'louisdupont@gmail.com',
    password: 'cyI5eWF4JUhwTGMnKDUiRg==',
    role: 'teacher',
  },
];

const schema = buildSchema(`
  type Query {
    user(id: Int!): User,
    users(role: String): User
  }
    type User {
        id: Int,
        name: String,
        firstname: String,
        birthday: String,
        mail: String,
        password: String,
        role: String
    }
`);

const getUser = (args: any) => {
  const { id } = args;
  console.log(users.filter((user) => user.id === id)[0]);
  return users.filter((user) => user.id === id)[0];
};

const getUsers = (args: any) => {
  if (args.role) return users.filter((user) => user.role === args.role)[0];
  return users;
};

// Root resolver
const root = {
  user: getUser,
  users: getUsers,
};

// Create an express server and a GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
