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
//
// class Login extends React.Component {
//   componentDidMount() {
//     if (isAuthenticated()) {
//       this.props.history.push('/app/dashboard');
//     }
//   }
//
//   loginHandler = async (event) => {
//     event.preventDefault();
//     setIsAuthenticated(true);
//     this.props.history.push('/app/dashboard');
//   };
//
//   render() {
//     return (
//       <div className="container">
//
//         <div className="row justify-content-center">
//
//           <div className="col-xl-10 col-lg-12 col-md-9">
//
//             <div className="card o-hidden border-0 shadow-lg my-5">
//               <div className="card-body p-0">
//
//                 <div className="row">
//                   <div className="col-lg-3"></div>
//                   <div className="col-lg-6">
//                     <div className="p-5">
//                       <div className="text-center">
//                         <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
//                       </div>
//                       <form className="user">
//                         <div className="form-group">
//                           <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
//                         </div>
//                         <div className="form-group">
//                           <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
//                         </div>
//                         <div className="form-group">
//                           <div className="custom-control custom-checkbox small">
//                             <input type="checkbox" className="custom-control-input" id="customCheck" />
//                             <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
//                           </div>
//                         </div>
//                         <a href="#" onClick={this.loginHandler} className="btn btn-primary btn-user btn-block">
//                           Login
//                         </a>
//                       </form>
//                       <hr />
//                       <div className="text-center">
//                         {/* <a className="small" href="forgot-password.html">Forgot Password?</a> */}
//                         <Link to={`/forgot-password`} className="small">Forgot Password?</Link>
//                       </div>
//                       <div className="text-center">
//                         {/* <a className="small" href="register.html">Create an Account!</a> */}
//                         <Link to={`/register`} className="small">Create an Account!</Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//
//           </div>
//
//         </div>
//
//       </div>
//     );
//   }
// }

export default Login;
