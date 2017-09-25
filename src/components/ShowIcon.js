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
            <button type="text" className="btn btn-just-icon btn-border btn-google" onClick={() => {this.props.postLike(this.props.post_id)  ;}}>
              <i className="fa fa-heart-o" aria-hidden="true"/>
            </button>
            <span className="card-title">
                                    <a href="#pablo" id="like"> {this.props.like} likes  </a>
                                </span>
          </div>

          <div className="col-md-8">
            <button className="btn btn-just-icon btn-border btn-outline-success" onClick = {() => {this.props.isAddComment(); this.props.getComment(); }}>
              <i className="fa fa-comment-o" aria-hidden="true"/>
            </button>
            <span className="card-title">
                                    <a href="#pablo" id="comment"> {this.props.comment} comments  </a>
                                </span>
          </div>
          <div className="col-md-2">
            <button className="btn btn-border btn-github" onClick = {() => {this.props.postDelete(this.props.post_id );}}>
              <i className="fa fa-trash-o" aria-hidden="true"/>
            </button>
            <span className="card-title">
                                    <a href="#pablo" id="comment"> {this.props.comment}  </a>
                                </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowIcon;
