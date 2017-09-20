/* eslint-disable import/no-named-as-default */
import React from 'react';

import NavbarComponent from './NavbarComponent';
import * as getDataToShow from '../actions/getDataToShow';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import axios from 'axios';
class LoginComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      email : "frontend@123",
      password : "12345",
    };

    this.login.bind(this);
  }

  login(){
    axios.post('http://api.trainingcolorme.tk/login-user',
      this.state)
      .then((response) => {
        this.props.getDataToShow.getToken(response.data.data);       })
      .catch(function (error) {
      });
  }

  render() {
    return (
    <div className="full-screen register">
      <NavbarComponent/>
      <div className="wrapper">
        <div className="page-header"  style={{"background-image" : "url('http://d2xbg5ewmrmfml.cloudfront.net/assets/img/sections/bruno-abatti.jpg')", width: '100%', 'z-index' : 0}}>
          <div className ="filter" />
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-1 col-sm-7 col-xs-12">

                <img src="https://hootsuite.com/uploads/images/craft/components/media-block/monitor-instagram-effectively.png.png" />
              </div>
              <div className="col-md-4 col-sm-5 col-xs-12">
                <div className="card card-register">
                  <h3 className="card-title text-center">Login</h3>
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
                  <form className="register-form" >
                    <input type="text" className="form-control" placeholder="Email"
                      onChange={(e) => this.state.email = e.target.value()}
                    />

                    <input type="password" className="form-control" placeholder="Password"
                           onChange={(e) => this.state.password = e.target.value()}
                    />

                    <button className="btn btn-block btn-round" onClick={(e) => {e.preventDefault();this.login();
                    }}>Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="demo-footer text-center">
            <h6> Made <i className="fa fa-heart heart"></i> by Keetool Gays</h6>
          </div>
        </div>
      </div>

    </div>
  );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getDataToShow: bindActionCreators(getDataToShow, dispatch),
  };
}

export default connect(mapDispatchToProps)(LoginComponent);
