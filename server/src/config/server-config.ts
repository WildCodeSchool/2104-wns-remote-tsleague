import dotenv from 'dotenv';
dotenv.config();

export default {
  dev: {
    uri: process.env.DB_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 4000,
    autoListen: false,
    verbose: true,
  },
  prod: {
    uri: 'mongodb://127.0.0.1:27017/pixelearn-prod',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 4000,
    autoListen: false,
    verbose: true,
  },
  test: {
    uri: 'mongodb://127.0.0.1:27017/test',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 555,
    autoListen: true,
    verbose: true,
  },
};
