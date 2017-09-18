import React from 'react';

class ShowCommentAndIconComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (


      <div className="card-block">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-just-icon btn-border btn-google">
              <i className="fa fa-heart-o" aria-hidden="true"/>
            </button>
            <span className="card-title">
                                    <a href="#pablo" id="like">{this.props.like}like</a>
                                </span>
          </div>
          <div className="col-md-2">
            <button className="btn btn-just-icon btn-border btn-github">
              <i className="fa fa-comment-o" aria-hidden="true"/>
            </button>
            <br/><br/>
          </div>
        </div>
        <hr/>

        {/*       COMMENT       */}


        <input className="form-control mr-sm-2 no-border" placeholder="Add comment" type="text"/>
      </div>
    );
  }
}

export default ShowCommentAndIconComponent;
