import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
  useQuery,
  gql,
} from '@apollo/client';

import Router from './components/Router';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

import 'normalize.css';

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'include',
});

const authMiddleware = new ApolloLink((operation): any => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null,
    },
  }));
});

const client = new ApolloClient({
  uri: 'http://localhost:5050',
  cache: new InMemoryCache(),
  link,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
