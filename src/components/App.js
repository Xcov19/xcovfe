import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Loading from './Loading';
import Layout from './Layout';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

import { initAuth0, isAuthenticated } from '../auth';

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!isAuthenticated()) {
    return (<Redirect to="/login" />)
  } else {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))} />
    );
  }
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.auth0Handler();
  }

  auth0Handler = async () => {
    await initAuth0();
    this.setState({
      loading: false
    })
  }

  render() {

    const { loading } = this.state;

    if (loading) {
      return (
        <Loading />
      )
    }

    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/app/dashboard" />} />
          <PrivateRoute path="/app" component={Layout} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    );
  }
}

export default App;
