import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as getDataToShow from '../actions/getDataToShow';
import * as Actions from '../actions/Actions';
import * as postLikeAndComment from '../actions/postLikeAndComment';
import ShowUserComponent from "../components/ShowUserComponent";
import ShowImageAndTime from "../components/ShowImageAndTime";
import ShowReadMore from "../components/ShowReadMore";
import ShowHeader from "../components/ShowHeader";
import ShowIcon from "../components/ShowIcon";
import ShowComment from "../components/ShowComment";


class ShowContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getPost = this.getPost.bind(this);
    this.getComment =this.getComment.bind(this);
    this.isAddComment = this.isAddComment.bind(this);
    this.loadPageId = this.loadPageId.bind(this);
    this.postLike = this.postLike.bind(this);
    this.postComment = this.postComment.bind(this);
    console.log("CONTAINER_PROPS", this.props.actions.isAddComment);

  }

  getPost(value) {
    this.props.getDataToShow.getPostToShow(value);
  }
  isAddComment(){
    this.props.actions.isAddComment() ;
  }
  loadPageId(){
    this.props.getDataToShow.loadPageId();
  }
  getComment(){
    this.props.getDataToShow.getCommentToShow();
  }
  postLike(post_id, user_id){
    this.props.postLikeAndComment.postLike(post_id,user_id);
  }
  postComment(post_id, content){
    this.props.postLikeAndComment.postComment(post_id, content);
  }

  render() {
    return (
      <div>
        <div>
          <div className="blog-2 section section-gray">
            <div className="container ">
              <div className="row">
                <div className="content-center">
                  <div className="col-md-8 offset-md-3">
                    <div className="row">
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
                                  getComment = {this.getComment}
                                  postLike = {this.postLike}
                                  post_id = {value.id}
                                  user_id = {value.user_id}
                                />
                                  <div className="col-md-10 offset-md-1">
                                  <ShowComment
                                  isAdding = {this.props.isAdding}
                                  listComment = {this.props.listComment}
                                  id = {value.id}
                                  postComment = {this.postComment}
                                    getComment = {this.getComment}
                                  />
                                  </div>
                                </div>

                                <br/><br/>
                              </div>
                            );
                          }
                        )
                        }
                        <center><ShowReadMore
                          getPost={this.getPost}
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
    isAdding : state.showReducer.isAdding,
    listComment : state.showReducer.listComment
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDataToShow: bindActionCreators(getDataToShow , dispatch),
    actions : bindActionCreators(Actions, dispatch),
    postLikeAndComment : bindActionCreators(postLikeAndComment, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);
