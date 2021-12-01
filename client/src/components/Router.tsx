import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './Login/Login';
import App from './App';
import TeacherRegistration from './TeacherRegistration/TeacherRegistration';
import StudentRegistration from './StudentRegistration/StudentRegistration';

function Router(): JSX.Element {
  const history = useHistory();

  // if (!Cookies.get('token')) {
  //   history.push('/');
  // }

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
