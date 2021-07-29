// REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import socketMiddleware from './middleware/socketMiddleware';
import socket from '../socket';

import rootReducer from './root-reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(socketMiddleware(socket))
);

export default store;
