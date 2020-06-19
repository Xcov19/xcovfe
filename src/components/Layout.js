import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

import Project from '../pages/Project';
// import Tickets from '../pages/Tickets';
import CreateProjectContainer from "../containers/CreateProjectContainer";
import DashboardContainer from "../containers/DashboardContainer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>

        <CreateProjectContainer />

        <div id="wrapper">

          <Sidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="container-fluid">
                <Switch>
                  <Route path="/app/dashboard" exact component={DashboardContainer} />
                  <Route path="/app/project/:id" exact component={Project} />
                  {/* <Route path="/app/project/tickets/:id" exact component={Tickets} /> */}
                </Switch>
              </div>
            </div>
          </div>
        </div>

        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
