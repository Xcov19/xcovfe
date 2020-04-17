import React from 'react';
import { auth0, setUser, setIsAuthenticated, isAuthenticated } from '../auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.history.push('/app/dashboard');
    }
  }

  loginHandler = async (event) => {
    event.preventDefault();

    try {
      await auth0().loginWithPopup({
        redirect_uri: window.location.origin
      });
    } catch (error) {
      console.error(error);
    }

    const user = await auth0().getUser();
    setUser(user);
    setIsAuthenticated(true);

    this.props.history.push('/app/dashboard');
  }

  render() {
    return (
      <div className="container">

        <div className="row justify-content-center">

          <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-md-3 d-none d-md-block"></div>
                  <div className="col-md-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <a onClick={this.loginHandler} href="#" className="btn btn-google btn-user btn-block">
                          Login
                      </a>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-3 d-none d-md-block"></div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Login;
