
import React from 'react';

import NavbarComponent from './NavbarComponent'
import {Redirect} from 'react-router'

import axios from 'axios';
import initialState from '../reducers/initialState';
class LoginComponent extends React.Component {
  constructor(){
    super();
    this.state = {

      email : "frontend@12",
      password : "12345",
      error : "",
      status : "/login"
    }
    this.login.bind(this);
  //////////////check token
    axios.get('http://api.trainingcolorme.tk/profile/'+
      localStorage.getItem("userid")+
      '?token='+
      localStorage.getItem("token"))
      .then((response)=>{
        console.log('get test',response);
        if(response.data.status)this.setState({status: "/newsfeed"});

      }).catch((error)=>{
      console.log('error test',error);
    });
  }

  redirectToRegister(){
    console.log("direct to register",this.state);
    this.setState({status : "/register"});
  }


  login(e) {
    e.preventDefault();
    axios.post('http://api.trainingcolorme.tk/login-user',this.state)
      .then((response) => {
        console.log('respone', response);
        if(!response.data.status)
          this.setState({error: response.data.data.message});
        else {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("userid", response.data.data.user.id);
          this.setState({status: "/newsfeed"});
        }
        this.props.login(response.data);
      })
      .catch(function (error) {
        console.log(error);

      });
  }

  render() {
    console.log("Login_component_render",this.state);
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
                    <div className="register-form">
                      <input type="text" className="form-control" placeholder="Email"
                             onChange={(e) => this.setState({email : e.target.value})} value={this.state.email}/>

                      <input type="password" className="form-control" placeholder="Password"
                             onChange={(e) => this.setState({password : e.target.value})} value={this.state.password}/>

                      <p style={{color : "red"}}>{this.state.error}</p>
                      <Redirect to={this.state.status}/>
                      <button className="btn btn-block btn-round" onClick={(e) => {this.login(e)}}>Login </button>
                    </div>

                    <div className="login">
                      <p >Don't have an account?

                          <a onClick={()=>{this.redirectToRegister()}} href="#">Register</a>

                      </p>
                    </div>
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

export default LoginComponent;
