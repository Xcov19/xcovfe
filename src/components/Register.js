import React from 'react';
import {
  Link
} from "react-router-dom";
import { auth0, setUser, setIsAuthenticated, isAuthenticated } from '../auth';

class Register extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.history.push('/app/dashboard');
    }
  }

  render() {
    return (
      <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <form className="user">
                    <div className="form-group row align-items-center">
                      <div className="col-sm-6 mb-3 mb-sm-0 text-right">
                        <label htmlFor="selectTemplate">Template</label>
                      </div>
                      <div className="col-sm-6">
                        <select id="selectTemplate" className="form-control">
                          <option selected="true" value="covid">Covid-19</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" id="companyName" placeholder="Company Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" id="companyAddress" placeholder="Company Address" />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" id="firstName" placeholder="First Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" id="lastName" placeholder="Last Name" />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="email" className="form-control form-control-user" id="inputEmail" placeholder="Email Address" />
                      </div>
                      <div className="col-sm-6">
                        <input type="number" className="form-control form-control-user" id="phoneNumber" placeholder="Phone Number" />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control-user" id="inputPassword" placeholder="Password" />
                      </div>
                      <div className="col-sm-6">
                        <input type="password" className="form-control form-control-user" id="repeatPassword" placeholder="Repeat Password" />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="otpPhoneCheck" />
                          <label className="custom-control-label" htmlFor="otpPhoneCheck">Send OPT to phone</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="otpEmailCheck" />
                          <label className="custom-control-label" htmlFor="otpEmailCheck">Send OPT to email</label>
                        </div>
                      </div>
                    </div>


                    <a href="login.html" className="btn btn-primary btn-user btn-block">
                      Register Account
                    </a>
                    <hr />
                    {/* <a href="index.html" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Register with Google
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                    </a> */}
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link to={`/forgot-password`} className="small">Forgot Password?</Link>
                  </div>
                  <div className="text-center">
                    <Link to={`/login`} className="small">Already have an account? Login!</Link>
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

export default Register;
