import React from 'react';
import ListComment from "./ShowListComment";
import PostComment from "./ShowPostComment";

class ShowComment extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.isAdding) {
      return (
        <div>
          <br/><hr /> <br/><br/>
          <PostComment
            id = {this.props.id}
            postComment = {this.props.postComment}
            getComment = {this.props.getComment}
          />
          <hr/>
          {this.props.listComment.map(
            (value) => {
              return (
                <div>
                  <ListComment
                    content={value.content}
                    post_id={value.post_id}
                    id={this.props.id}
                    updated_at = {value.updated_at}
                    user_id = {value.user_id}
                  />
                </div>
              );
            })}
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
