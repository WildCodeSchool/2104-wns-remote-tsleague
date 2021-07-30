import configServer from './config/server-config';
import { startServer } from './server';

const { SERVER_STAGE } = process.env.SERVER_STAGE;

startServer(configServer[SERVER_STAGE]);
