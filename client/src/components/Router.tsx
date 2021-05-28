import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AccountBox from './login/Index';
import App from './App';

function Router(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AccountBox />
        </div>
      </Route>
      <Route path="/game">
        <App />
      </Route>
    </Switch>
  );
}

export default Router;
