import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login';
import App from './App';
import ClassroomRegistration from './ClassroomRegistration/ClassroomRegistration';
import StudentRegistration from './StudentRegistration/StudentRegistration';

function Router(): JSX.Element {
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
      <Route path="/game">
        <App />
      </Route>
    </Switch>
  );
}

export default Router;
