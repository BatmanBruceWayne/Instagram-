import React from 'react';
import ListComment from "./ShowListComment";
import PostComment from "./ShowPostComment";

class ShowComment extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("COMPONENT_COMMENT", this.props.isAdding, "LIST_COMMENT IN COMPONENT", this.props.listComment, "ID(POST) IN COMPONENT", this.props.id);

    if (this.props.isAdding) {
      return (
        <div >
          {this.props.listComment.map(
            (value) => {
              return (
                <div onLoad =  {() => {this.props.getInfo(this.props.user_id);}} >
                  <ListComment
                    content={value.content}
                    post_id={value.post_id}
                    id={this.props.id}
                    updated_at = {value.updated_at}
                    info = {this.props.info}
                  />
                </div>
              );
            })}
          <PostComment
            id = {this.props.id}
            postComment = {this.props.postComment}
            getComment = {this.props.getComment}
          />
        </div>
      );

    }
    else return (
      <div>
      </div>
    );
  }
}

export default ShowComment;
