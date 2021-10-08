import configServer from './config/server-config';
import startServer from './server';
import startSocket from './socket/server';

const { SERVER_STAGE } = process.env;

// if (!SERVER_STAGE) {
//     throw new Error('SERVER_STAGE must be defined');
// }
startServer(configServer.dev);
startSocket();
