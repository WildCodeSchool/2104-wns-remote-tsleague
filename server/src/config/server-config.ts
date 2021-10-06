import dotenv from 'dotenv';
<<<<<<< HEAD
dotenv.config();

export default {
  dev: {
    uri: 'mongodb://127.0.0.1:27017/pixelearn-dev',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 4000,
=======

dotenv.config();

export type ServerConfig = {
  uri: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    useFindAndModify: boolean;
  };
  apolloPort: number;
  autoListen: boolean;
  verbose: boolean;
};

export default {
  dev: {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    uri: 'mongodb://mongodb:27017/pixelearn-dev',
    apolloPort: 5000,
>>>>>>> c73b6fc6bb6853ccbceade4f80e88553f832dafe
    autoListen: false,
    verbose: true,
  },
  prod: {
    uri: 'mongodb://127.0.0.1:27017/pixelearn-prod',
<<<<<<< HEAD
    options: { useNewUrlParser: true, useUnifiedTopology: true },
=======
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
>>>>>>> c73b6fc6bb6853ccbceade4f80e88553f832dafe
    apolloPort: 4000,
    autoListen: false,
    verbose: true,
  },
  test: {
<<<<<<< HEAD
    uri: 'mongodb://127.0.0.1:27017/test',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 555,
    autoListen: true,
    verbose: true,
=======
    uri: 'mongodb://127.0.0.1:27017/pixelearn-test',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    apolloPort: 8000,
    autoListen: true,
    verbose: false,
>>>>>>> c73b6fc6bb6853ccbceade4f80e88553f832dafe
  },
};
