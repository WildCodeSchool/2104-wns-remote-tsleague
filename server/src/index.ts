import configServer from './config/server-config';
import { startServer } from './server';

const { SERVER_STAGE } = process.env;

startServer(configServer[SERVER_STAGE]);
