import dotenv from 'dotenv';

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
    autoListen: false,
    verbose: true,
  },
  prod: {
    uri: 'mongodb://mongodb:27017/pixelearn-dev',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    apolloPort: 5000,
    autoListen: false,
    verbose: true,
  },
  test: {
    uri: 'mongodb://127.0.0.1:27017/pixelearn-test',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    apolloPort: 8000,
    autoListen: true,
    verbose: false,
  },
};
