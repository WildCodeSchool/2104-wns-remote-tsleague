import React from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './Login/Login';
import App from './App';
import Registration from './Registration/Registration';

function Router(): JSX.Element {
  const history = useHistory();
  const { pathname } = useLocation();

  if (!Cookies.get('token')) {
    if (
      // pathname.match(/(\/||\/register-.+)/gm)
      pathname !== '/' &&
      pathname !== '/register-teacher' &&
      pathname !== '/register-student'
    ) {
      history.push('/');
    }
  }

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/game">
        <App />
      </Route>
      <Route path={['/register-teacher', '/register-student']}>
        <Registration />
      </Route>
    </Switch>
  );
}

export default Router;
