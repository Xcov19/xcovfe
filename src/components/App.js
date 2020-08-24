import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Layout from './Layout';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Home from '../pages/Home';

import { isAuthenticated } from '../auth';

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/login" />
  }
  return (
    <Route {...rest} render={props => (React.createElement(component, props))} />
  );
};

/**
  TODO(@joeydebreuk): Fix this path to work on custom route!
*/
const App = () =>
  <Router>
    <Switch>
      <Route path='/' exact render={Home}/>
      <Route path="/xcov-demo" exact render={() => <Redirect to="/app/dashboard" />} />
      <PrivateRoute path="/app" component={Layout} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </Switch>
  </Router>;

export default App;
