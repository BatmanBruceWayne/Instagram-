/* eslint-disable import/no-named-as-default */
import React from 'react';
import  '../styles/LoginStyle.css';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class LoginComponent extends React.Component {
  render() {
    return (
    <div className="full-screen register">
      <div className="wrapper">
        <div className="page-header" style="background-image: url('../assets/img/sections/soroush-karimi.jpg');">
          <div className="filter"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-1 col-sm-7 col-xs-12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-umbrella"></i>
                  </div>
                  <div className="description">
                    <h3> We've got you covered </h3>
                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. Everything you need in a single case.</p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-map-signs"></i>
                  </div>
                  <div className="description">
                    <h3> Clear Directions </h3>
                    <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-user-secret"></i>
                  </div>
                  <div className="description">
                    <h3> We value your privacy </h3>
                    <p>Completely synergize resource taxing relationships via premier niche markets.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-5 col-xs-12">
                <div className="card card-register">
                  <h3 className="card-title text-center">Register</h3>
                  <div className="social">
                    <button href="#paper-kit" className="btn btn-just-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                    <button href="#paper-kit" className="btn btn-just-icon btn-google"><i className="fa fa-google"></i></button>
                    <button href="#paper-kit" className="btn btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                  </div>

                  <div className="division">
                    <div className="line l"></div>
                    <span>or</span>
                    <div className="line r"></div>
                  </div>
                  <form className="register-form">
                    <input type="text" className="form-control" placeholder="Email"/>

                    <input type="password" className="form-control" placeholder="Password"/>

                    <input type="password" className="form-control" placeholder="Confirm Password"/>

                    <button className="btn btn-block btn-round">Register</button>
                  </form>
                  <div className="login">
                    <p>Already have an account? <a href="#0">Log in</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="demo-footer text-center">
            <h6>&copy; <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart"></i> by Creative Tim</h6>
          </div>
        </div>
      </div>

    </div>

  );
  }
}

export default LoginComponent;
