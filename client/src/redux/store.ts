// REDUX
import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import socketMiddleware from './_middleware/socket-middleware';
// eslint-disable-next-line import/no-cycle
import socket from '../socket';

import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(socketMiddleware(socket)))
);

const persistor = persistStore(store);

export { store, persistor };
