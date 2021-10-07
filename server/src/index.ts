import configServer from './config/server-config';
import startServer from './server';
import startSocket from './socket/server';

const { SERVER_STAGE } = process.env;

startServer(configServer[SERVER_STAGE]);
startSocket();