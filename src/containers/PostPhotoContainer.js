import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PostPhotoComponent from '../components/RegisterComponent';
import * as postPhotoAction from '../actions/postPhotoAction';

class PostPhotoContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.sendPhotoOnAPI = this.sendPhotoOnAPI.bind(this);
  }

  sendPhotoOnAPI(value) {
    this.props.postPhotoAction.sendPhotoOnAPI(value);
  }

  render() {
    return (
      <div>
        <PostPhotoComponent
          sendPhotoOnAPI={this.sendPhotoOnAPI}
          listPost={this.props.listPost}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listPost: state.showReducer.listPost
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postPhotoAction: bindActionCreators(postPhotoAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPhotoContainer);

