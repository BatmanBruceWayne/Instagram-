import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProfileSettingComponent from '../components/ProfileSettingComponent';
import * as postProfileAction from '../actions/postProfileAction';

class ProfileSettingContainer extends React.Component{
  constructor(props, context){
    super(props, context);
    this.sendProfileOnAPI = this.sendProfileOnAPI.bind(this);
  }

  sendProfileOnAPI(value){
    this.props.postProfileAction.sendProfileOnAPI(value);
  }

  render(){
    return(
      <ProfileSettingComponent
        sendProfileOnAPI={this.sendProfileOnAPI}/>
    );
  }
}

function mapStateToProps() {
  return{

  };
}

function mapDispatchToProps(dispatch){
  return{
    postProfileAction: bindActionCreators(postProfileAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingContainer);
