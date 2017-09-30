import React from 'react';
import App from '../components/App';
import {connect} from 'react-redux';
import * as postProfileAction from '../actions/postProfileAction';
import {bindActionCreators} from 'redux';

class AppContainer extends React.Component {
  constructor(props,context){
    super(props,context);
    this.getProfile = this.getProfile.bind(this);
  }

  getProfile(){
    this.props.postProfileAction.getProfile();
  }

  render() {
    return (
      <div>
        <App myProfile={this.props.myProfile}
             getProfile={this.getProfile}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    myProfile: state.getPhotoToProfileReducer.myProfile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postProfileAction:bindActionCreators(postProfileAction,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
