// REDUX
import { createStore, applyMiddleware } from 'redux';
import socketMiddleware from './middleware/socket-middleware';
import socket from '../socket';

import rootReducer from './root-reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(socketMiddleware(socket))
);

export default store;
