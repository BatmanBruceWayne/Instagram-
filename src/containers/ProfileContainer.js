import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProfileComponent from '../components/ProfileComponent';
import * as getPhotoToProfileAction from '../actions/getPhotoToProfileAction';

class ProfileContainer extends React.Component{
  constructor(props, context){
    super(props, context);
    this.getPhotoToProfile = this.getPhotoToProfile.bind(this);
  }

  getPhotoToProfile(value) {
    this.props.getPhoToProfileAction.getPhotoToProfile(value);
  }

  render(){
    return(
      <ProfileComponent
        getPhotoToProfile={this.getPhotoToProfile}
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
    getPhoToProfileAction: bindActionCreators(getPhotoToProfileAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
