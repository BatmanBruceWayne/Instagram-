/* eslint-disable import/no-named-as-default */
import React from 'react';


class NavbarComponent extends React.Component {
  render() {
    return (

        <nav className="navbar navbar-toggleable-md bg-success fixed-top navbar-default" color-on-scroll="200">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar"></span>
              <span className="navbar-toggler-bar"></span>
              <span className="navbar-toggler-bar"></span>
            </button>



            <button className="btn btn-just-icon btn-instagram">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </button>

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
                  <a href="#paper-kit" className="nav-link navbar-brand" data-toggle="dropdown" width="30" height="30" aria-expanded="false">
                    <div className="profile-photo-small">
                      <img src="http://d2xbg5ewmrmfml.cloudfront.net/assets/img/faces/erik-lucatero-2.jpg" alt="Circle Image" className="img-circle img-responsive img-no-padding"/>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                    <li className="dropdown-header">Dropdown header</li>
                    <li className="dropdown-item"><a href="#paper-kit">Action</a></li>
                    <li className="dropdown-item"><a href="#paper-kit">Another action</a></li>
                    <li className="dropdown-item"><a href="#paper-kit">Something else here</a></li>
                    <div className="dropdown-divider"></div>
                    <li className="dropdown-item"><a href="#paper-kit">Separated link</a></li>
                    <div className="dropdown-divider"></div>
                    <li className="dropdown-item"><a href="#paper-kit">Another separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </nav>

    );
  }
}

export default NavbarComponent;
