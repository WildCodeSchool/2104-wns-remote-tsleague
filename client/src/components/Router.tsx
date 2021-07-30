import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login';
import Signup from './Signup/Signup';
import App from './App';

function Router(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route path="/game">
        <App />
      </Route>
    </Switch>
  );
}

export default Router;
