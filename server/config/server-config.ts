export default {
  dev: {
    uri: 'mongodb://127.0.0.1:27017/dev',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 4000,
    autoListen: false,
    verbose: false,
  },
  test: {
    uri: 'mongodb://127.0.0.1:27017/test',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    apolloPort: 555,
    autoListen: true,
    verbose: true,
  },
};
