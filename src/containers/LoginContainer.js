import React from 'react';
import LoginComponent from "../components/LoginComponent";
import * as LoginAciton from '../actions/LoginAction';
import * as postProfileAction from '../actions/postProfileAction';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class LoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(data) {
    this.props.loginActions.login(data);
  }

  getProfile() {
    this.props.postProfileAction.getProfile();
  }

  render() {
    return ( <LoginComponent
      login={this.login}
      getProfile={this.getProfile}
      myProfile={this.props.myProfile}
    />);
  }
}

function mapStateToProps(state) {
  return {
    data: state.loginState,
    myProfile: state.getPhotoToProfileReducer.myProfile

  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(LoginAciton, dispatch),
    postProfileAction: bindActionCreators(postProfileAction, dispatch)
  }
    ;
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
