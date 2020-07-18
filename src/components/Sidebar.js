import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Sidebar.scss';

const styles = {
  toggleWrapper: {
    position: 'absolute',
    top: "50%",
    bottom: "50%",
    left: "12px",
    zIndex: 99,
  },
  toggleButton: {
    margin: "auto",
    background: 'white',
    color: 'blue',
    borderRadius: '99px',
    fontWeight: 700,
    border: 'solid 2px #345bcb',
    shadow: 'none',
  },
};

function Sidebar() {
  const [expandedSidebar, setExpandedSidebar] = React.useState(true);
  return (
    <React.Fragment>
      <div style={styles.toggleWrapper}>
        <Button
          onClick={() => setExpandedSidebar(!expandedSidebar)}
          style={styles.toggleButton}
          className="transition"
        >{ expandedSidebar ? '<' : '>' }</Button>
      </div>

      <ul
        className={`
          ${expandedSidebar ? 'expanded-sidebar' : 'collapsed-sidebar'} 
          navbar-nav bg-gradient-primary sidebar sidebar-dark accordion transition
          `}
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Dashboard</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <Link to={`/app/dashboard`} className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider mb-0" />

        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Account Settings</span>
          </a>
        </li>

        <hr className="sidebar-divider mb-0" />

        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-table"></i>
            <span>Profile View</span>
          </a>
        </li>
        {/* <div className="sidebar-heading">
          Interface
        </div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">Buttons</a>
              <a className="collapse-item" href="cards.html">Cards</a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">Colors</a>
              <a className="collapse-item" href="utilities-border.html">Borders</a>
              <a className="collapse-item" href="utilities-animation.html">Animations</a>
              <a className="collapse-item" href="utilities-other.html">Other</a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
          Addons
          </div>

        <li className="nav-item active">
          <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse show" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">Login</a>
              <a className="collapse-item" href="register.html">Register</a>
              <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">404 Page</a>
              <a className="collapse-item active" href="blank.html">Blank Page</a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div> */}

      </ul>
    </React.Fragment>
  );
}

export default Sidebar;
