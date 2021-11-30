import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login';
import App from './App';
import Register from './Register';

function Router(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/game">
        <App />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
}

export default Router;
