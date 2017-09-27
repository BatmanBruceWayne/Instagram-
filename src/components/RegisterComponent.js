/* eslint-disable import/no-named-as-default */
import React from 'react';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';
import {Redirect} from 'react-router'
class RegisterComponent extends React.Component {

  constructor(){
    super();
    this.state = {
        name : 'Nang',
        email : 'demo',
        password : '123',
        status: '/register',
        error:''
    };
    this.register = this.register.bind(this);

  }
  redirectToLogin(){
    console.log("direct to login",this.state);
    this.setState({status : "/login"});
  }
  register(){
    console.log("register, State: ",this.state);

    axios.post('http://api.trainingcolorme.tk/register-user',
      this.state)
      .then((response) => {
        console.log('respone', response);
        if(response.data.status){
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("userid", response.data.data.user.id);
          this.setState({status : '/profile'});
        }else {
          this.setState({error:response.data.data.message});
        }
      }).catch(function (error) {
        console.log(error);
    });
  }

  render() {
    return (
      <div className="full-screen register">
        <NavbarComponent/>
        <div className="wrapper">
          <div className="page-header"   style={{"background-image" : "url('http://d2xbg5ewmrmfml.cloudfront.net/assets/img/sections/bruno-abatti.jpg')", width: '100%', 'z-index' : 0}}>
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
                      <button href="#paper-kit" className="btn btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></button>

                    </div>

                    <div className="division">
                      <div className="line l"></div>
                      <span>or</span>
                      <div className="line r"></div>
                    </div>
                    <div className="register-form">
                      <input type="text" className="form-control" placeholder="Name"
                        onChange={(e) => this.setState({name: e.target.value})}
                      />
                      <input type="text" className="form-control" placeholder="Email"
                             onChange={(e) => this.setState({email: e.target.value})}
                      />
                      <input type="password" className="form-control" placeholder="Password"
                             onChange={(e) => this.setState({password: e.target.value})}
                      />

                      <button className="btn btn-block btn-round" onClick={this.register}>Register</button>
                      <p style={{color : "red"}}>{this.state.error}</p>
                    </div>
                    <div className="login">
                      <p >Already have an account?
                          <a onClick={()=>{this.redirectToLogin()}} href="#">Login</a><Redirect to={this.state.status}/>
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

export default RegisterComponent;
