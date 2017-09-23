import React from 'react';
import ListComment from "./ShowListComment";
import PostComment from "./ShowPostComment";

class ShowComment extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("COMPONENT_COMMENT", this.props.isAdding, "hihihihhhihihhi", this.props.listComment, "hahaahhahhah", this.props.id + 1);
    if (this.props.isAdding) {
      return (
        <div>
          {this.props.listComment.map(
            (value) => {
              return (
                <div>
                  <ListComment
                    content={value.content}
                    post_id={value.post_id}
                    id={this.props.id}
                    updated_at = {value.updated_at}
                  />
                </div>
              );
            })}
          <PostComment
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
