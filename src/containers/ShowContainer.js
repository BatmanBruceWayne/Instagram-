import React from 'react';
import ShowComponent from '../components/ShowComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getDataToShow from '../actions/getDataToShow';

class ShowContainer extends React.Component{
    constructor(props, context){
      super(props, context);
      this.getData = this.getData.bind(this);
    }
  getData(){
      this.props.getDataToShow.getDataToShow();
  }
  render(){
    return (
      <div>
        <ShowComponent
        getData = {this.getData}
        listPost = {this.props.listPost}
        />
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state.showReducer);
  return{
    listPost : state.showReducer.listPost
  };
}
function mapDispatchToProps (dispatch) {
  return {
    getDataToShow : bindActionCreators(getDataToShow , dispatch)
  };
}
export default connect(mapStateToProps , mapDispatchToProps)(ShowContainer);
