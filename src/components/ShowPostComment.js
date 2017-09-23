import React from 'react';

class PostComment extends React.Component{
  constructor (props) {
    super(props);
  }
  render(){
    return(
      <div>
        <div className="media media-post">
          <a className="pull-left author" href="#paper-kit">
            <div className="avatar">
              <img className="media-object" alt="64x64" src="assets/img/faces/kaci-baum-2.jpg" />
            </div>
          </a>
          <div className="media-body">
            <textarea className="form-control" placeholder="Write a comment..." rows="2" />
            <div className="media-footer">
              <a href="#paper-kit" className="btn btn-info pull-right">Reply</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default PostComment;
