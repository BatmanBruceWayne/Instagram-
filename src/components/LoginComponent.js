/* eslint-disable import/no-named-as-default */
import React from 'react';


class LoginComponent extends React.Component {
  render() {
    return (
    <div className="full-screen register">
      <div className="wrapper">
        <div className="page-header" >
          <div className="filter"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-1 col-sm-7 col-xs-12">

                <img src="https://hootsuite.com/uploads/images/craft/components/media-block/monitor-instagram-effectively.png.png" />
              </div>
              <div className="col-md-4 col-sm-5 col-xs-12">
                <div className="card card-register">
                  <h3 className="card-title text-center">Register</h3>
                  <div className="social">
                    <button href="#paper-kit" className="btn btn-just-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                    <button href="#paper-kit" className="btn btn-just-icon btn-google"><i className="fa fa-google"></i></button>

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
