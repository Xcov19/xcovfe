import React from 'react';
import { Link } from "react-router-dom";
import { setIsAuthenticated, isAuthenticated } from '../auth';
import {
  Card,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row
} from "react-bootstrap";
import {Field} from "./form";

class Login extends React.Component {
  componentDidMount() {
    if (isAuthenticated()) {
      this.props.history.push('/app/dashboard');
    }
  }

  loginHandler = async (event) => {
    event.preventDefault();
    setIsAuthenticated(true);
    this.props.history.push('/app/dashboard');
  };

  render() {
    return (
      <div className="container" style={{ height: '100vh', display: 'flex', }}>
        <Card style={{ margin: 'auto', padding: "40px 100px", minWidth: 540 }}>
          <Card.Body>
            <Card.Title className="text-center">
              <h3>
                Welcome!
              </h3>
              <hr />
            </Card.Title>

            <Card.Text className="text-center">

              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl type="email"/>
              </FormGroup>

              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl type="password"/>
              </FormGroup>

              <a href="#" onClick={this.loginHandler} className="btn btn-primary btn-user btn-block">
                Login
              </a>

              <hr />

              <Row className="text-center">
                <Link to={`/forgot-password`} className="small flex-grow-1">Forgot Password?</Link>
              </Row>
              <Row className="text-center">
                <Link to={`/register`} className="small flex-grow-1">Create an Account!</Link>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
