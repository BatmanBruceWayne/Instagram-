import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getDataToShow from '../actions/getDataToShow';
import * as Actions from '../actions/Actions';
import ShowUserComponent from "../components/ShowUserComponent";
import ShowImageAndTime from "../components/ShowImageAndTime";
import ShowReadMore from "../components/ShowReadMore";
import NavbarComponent from "../components/NavbarComponent";
import ShowHeader from "../components/ShowHeader";
import ShowIcon from "../components/ShowIcon";
import ShowComment from "../components/ShowComment";


class ShowContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getData = this.getData.bind(this);
    this.isAddComment = this.isAddComment.bind(this)
    this.loadPageId = this.loadPageId.bind(this);
    console.log("CONTAINER_PROPS", this.props.actions.isAddComment);

  }

  getData() {
    this.props.getDataToShow.getDataToShow();
  }
  isAddComment(){
    this.props.actions.isAddComment() ;
  }
  loadPageId(){
    this.props.getDataToShow.loadPageId();
  }

  render() {
    return (
      <div>
        <div>
          <div className="blog-2 section section-gray">
            <div className="container ">
              <div className="row">
                <div className="content-center">
                  <div className="col-md-10 offset-md-2">
                    <div className="row">
                      <NavbarComponent/>
                      <div className="col-md-10">
                        <ShowHeader/>
                        {this.props.listPost.map(
                          (value) => {
                            return (
                              <div className="card card-blog" style={{backgroundColor: "#FFFAF0"}}>
                                <ShowUserComponent
                                  user_name={value.user_name}
                                />
                                <ShowImageAndTime
                                  description={value.description}
                                  img_url={value.img_url}
                                  updated_at={value.updated_at}
                                />
                                < div className="card-block">
                                <ShowIcon
                                  like={value.like}
                                  isAddComment = {this.isAddComment}
                                />
                                  <ShowComment
                                  isAdding = {this.props.isAdding}
                                  />
                                </div>

                                <br/><br/>
                              </div>
                            );
                          }
                        )
                        }
                        <center><ShowReadMore
                          getData={this.getData}
                          loadPageId= {this.loadPageId}
                        /></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}

function mapStateToProps(state) {
  console.log("STATE_IN_CONTAINER ",state.showReducer);
  return {
    listPost: state.showReducer.listPost,
    isAdding : state.showReducer.isAdding
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDataToShow: bindActionCreators(getDataToShow, dispatch),
    actions : bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);
