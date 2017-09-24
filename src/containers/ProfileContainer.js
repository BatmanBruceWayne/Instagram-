import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProfileComponent from '../components/ProfileComponent';
import * as getPhotoToProfileAction from '../actions/getPhotoToProfileAction';
import * as postProfileAction from '../actions/postProfileAction';

class ProfileContainer extends React.Component{
  constructor(props, context){
    super(props, context);
    this.getPhotoToProfile = this.getPhotoToProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  getPhotoToProfile(value) {
    this.props.getPhoToProfileAction.getPhotoToProfile(value);
  }

  getProfile(){
    this.props.postProfileAction.getProfile;
  }

  render(){
    return(
      <ProfileComponent
        getPhotoToProfile={this.getPhotoToProfile}
        getProfile={this.getProfile}
        myPhoto={this.props.myPhoto}/>
    );
  }
}

function mapStateToProps(state) {
  return{
    myPhoto: state.getPhotoToProfileReducer.myPhoto
  };
}

function mapDispatchToProps(dispatch){
  return{
    getPhoToProfileAction: bindActionCreators(getPhotoToProfileAction, dispatch),
    postProfileAction: bindActionCreators(postProfileAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
