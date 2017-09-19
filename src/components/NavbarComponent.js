/* eslint-disable import/no-named-as-default */
import React from 'react';
import {NavLink} from 'react-router-dom';
import ProfileComponent from './ProfileComponent';

class NavbarComponent extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-toggleable-md bg-success fixed-top navbar-default" color-on-scroll="200">
        <div className="container">
          <NavLink extra to="/">
            <button className="btn btn-just-icon btn-instagram">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </button>
          </NavLink>
          <a className="navbar-brand" href="#paper-kit">INSTAGRAM</a>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <form className="form-inline">
                  <input className="form-control mr-sm-2 no-border" type="text" placeholder="Search"/>
                  <button type="submit" className="btn btn-primary btn-just-icon btn-round ">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </li>


              <li className="nav-item dropdown">
                <a className="btn btn-primary btn-just-icon btn-round" data-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-right dropdown-wide dropdown-notification">
                  <li className="dropdown-header">
                    You have 7 unread notifications
                  </li>
                  <li>
                  </li>
                  <li className="dropdown-footer">
                    <ul className="dropdown-footer-menu">
                      <li>
                        <a href="#paper-kit">Mark all as read</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <div className="nav-link navbar-brand" data-toggle="dropdown" width="30" height="30"
                     aria-expanded="false">
                  <div className="profile-photo-small">
                    <NavLink to="/profile">
                      <img src="http://d2xbg5ewmrmfml.cloudfront.net/assets/img/faces/erik-lucatero-2.jpg"
                           alt="Circle Image" className="img-circle img-responsive img-no-padding"/>
                    </NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    );
  }
}

export default NavbarComponent;
