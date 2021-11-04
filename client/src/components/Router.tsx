import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login';
import App from './App';
import ClassroomRegistration from './ClassroomRegistration/ClassroomRegistration';

function Router(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/classroomRegistration">
        <ClassroomRegistration />
      </Route>
      <Route path="/game">
        <App />
      </Route>
    </Switch>
  );
}

export default Router;
