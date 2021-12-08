// REDUX
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import socketMiddleware from './middleware/socket-middleware';
// eslint-disable-next-line import/no-cycle
import socket from '../socket';

import rootReducer from './root-reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(socketMiddleware(socket)))
);

export default store;
