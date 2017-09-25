import React from 'react';

class ShowIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <button type="text" className="btn btn-just-icon btn-border btn-google" onClick={() => {this.props.postLike(this.props.post_id, this.props.user_id) ; this.props.getPost() ;}}>
              <i className="fa fa-heart-o" aria-hidden="true"/>
            </button>
            <span className="card-title">
                                    <a href="#pablo" id="like"> {this.props.like} likes  </a>
                                </span>
          </div>

          <div className="col-md-4">
            <button className="btn btn-just-icon btn-border btn-github" onClick = {() => {this.props.isAddComment(); this.props.getComment(); }}>
              <i className="fa fa-comment-o" aria-hidden="true"/>
            </button>
            <span className="card-title">
                                    <a href="#pablo" id="comment"> {this.props.comment} comments  </a>
                                </span>
            <br/><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowIcon;
