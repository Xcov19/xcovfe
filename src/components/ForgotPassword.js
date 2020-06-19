import React from 'react';
import {
  Link
} from "react-router-dom";
import { auth0, setUser, setIsAuthenticated, isAuthenticated } from '../auth';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.history.push('/app/dashboard');
    }
  }

  render() {
    return (
      <div className="container">

        <div className="row justify-content-center">

          <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                        <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <a href="login.html" className="btn btn-primary btn-user btn-block">
                          Reset Password
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        {/* <a className="small" href="register.html">Create an Account!</a> */}
                        <Link to={`/register`} className="small">Create an Account!</Link>
                      </div>
                      <div className="text-center">
                        {/* <a className="small" href="login.html">Already have an account? Login!</a> */}
                        <Link to={`/login`} className="small">Already have an account? Login!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default ForgotPassword;
