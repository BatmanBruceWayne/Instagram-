import React from 'react';
import ShowComponent from '../components/ShowComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getDataToShow from '../actions/getDataToShow';
import ShowUserComponent from "../components/ShowUserComponent";
import ShowImageAndTime from "../components/ShowImageAndTime";
import ShowCommentAndIcon from "../components/ShowCommentAndIcon";

class ShowContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getData = this.getData.bind(this);
  }

  getData() {
    this.props.getDataToShow.getDataToShow();
  }

  render() {
    {console.log("uhuhuhuhuhu" , this.props.listPost);}
    return (
      <div>


        <ShowComponent
          getData={this.getData}
          listPost={this.props.listPost}
        />
      </div>

  );

  }
}

function mapStateToProps(state) {
  {console.log("mapStateToProps" , state.showReducer.listPost);}
  return {
    listPost: state.showReducer.listPost
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDataToShow: bindActionCreators(getDataToShow, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);
