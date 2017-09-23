import React from 'react';
import LoginComponent from "../components/LoginComponent";
import ProfileComponent from "../components/ProfileComponent";

import * as LoginAciton from '../actions/LoginAction';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';




export class LoginContainer extends React.Component{
  constructor(){
    super();
    this.login = this.login.bind(this);
  }

  login(data){
    this.props.loginActions.login(data);

  }

  render(){
    return( <LoginComponent
                  login = {this.login}

    />);
  }
}

function mapStateToProps(state) {
  return {
    data : state.loginState
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(LoginAciton, dispatch)
  }
    ;
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
