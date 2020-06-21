import React from 'react';
import { withRouter } from "react-router";
import {getUsername, setIsAuthenticated} from "../auth";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    }
  }

  logoutHandler = (event) => {
    event.preventDefault()
    setIsAuthenticated(false);
    this.props.history.push('/login');
  };

  showDropDownHandler = (event) => {
    event.preventDefault();
    this.setState({
      showDropDown: !this.state.showDropDown
    })
  };

  render() {
    const {showDropDown} = this.state;

    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
  
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>
  
        <ul className="navbar-nav ml-auto">
  
          <div className="topbar-divider d-none d-sm-block"></div>
  
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.showDropDownHandler}>
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Hello {getUsername() || 'User'}</span>
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
              </svg>
            </a>
            <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${showDropDown ? 'show' : ''}`} aria-labelledby="userDropdown">
              <a onClick={this.logoutHandler} className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navbar);
