import React from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './Login/Login';
import App from './App';
import TeacherRegistration from './TeacherRegistration/TeacherRegistration';

function Router(): JSX.Element {
  const history = useHistory();
  const { pathname } = useLocation();

  if (!Cookies.get('token')) {
    if (pathname !== '/' && pathname !== '/register') {
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
      <Route path="/register">
        <TeacherRegistration />
      </Route>
    </Switch>
  );
}

export default Router;
