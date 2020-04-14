import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    }
  }

  showDropDownHandler = (event) => {
    event.preventDefault();
    this.setState({
      showDropDown: !this.state.showDropDown
    })
  }

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
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Kuljeet Singh</span>
              <img className="img-profile rounded-circle" src="https://www.gravatar.com/avatar/94ba1ca570b3d6065028fbcd03d6fbd9?s=60" alt="avatar" />
            </a>
            <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${showDropDown ? 'show' : ''}`} aria-labelledby="userDropdown">
              {/* <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div> */}
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
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

export default Navbar;
