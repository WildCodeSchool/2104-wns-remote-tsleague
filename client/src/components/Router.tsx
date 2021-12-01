import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './Login/Login';
import App from './App';
import ClassroomRegistration from './ClassroomRegistration/ClassroomRegistration';
import StudentRegistration from './StudentRegistration/StudentRegistration';
import Register from './Register';
import ForgotPassword from './ForgotPassword/ForgotPassword';

function Router(): JSX.Element {
  const history = useHistory();

  if (!Cookies.get('token')) {
    history.push('/');
  }

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/registration">
        <ClassroomRegistration />
      </Route>
      <Route path="/registration2">
        <StudentRegistration />
      </Route>
      <Route path="/forgotpassword">
        <ForgotPassword />
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
