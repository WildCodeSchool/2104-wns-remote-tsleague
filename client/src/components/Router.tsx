import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AccountBox from './login/index';
import App from './App';

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <AccountBox />
      </Route>
      <Route path="/game">
        <App />
      </Route>
    </Switch>
  );
}
