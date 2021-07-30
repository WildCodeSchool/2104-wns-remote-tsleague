import dotenv from 'dotenv';

dotenv.config();

export default {
  dev: {
    uri: process.env.DB_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 5000,
    autoListen: false,
    verbose: true,
    mocks: false,
  },
  prod: {
    uri: 'mongodb://127.0.0.1:27017/pixelearn-prod',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 4000,
    autoListen: false,
    verbose: true,
    mocks: false,
  },
  test: {
    uri: 'mongodb://127.0.0.1:27017/pixelearn-test',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      dbName: 'pixelearn-test',
    },
    apolloPort: 8000,
    autoListen: true,
    verbose: true,
  },
};
