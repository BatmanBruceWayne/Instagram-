import React from 'react';

class ShowIcon extends React.Component {
  constructor(props) {
    super(props);
    console.log("COMPONENT_ICON", this.props.isAddComment);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-just-icon btn-border btn-google">
              <i className="fa fa-heart-o" aria-hidden="true"/>
            </button>
            <span className="card-title">
                                    <a href="#pablo" id="like"> {this.props.like} likes  </a>
                                </span>
          </div>

          <div className="col-md-2">
            <button className="btn btn-just-icon btn-border btn-github" onClick = {() => {this.props.isAddComment(); }}>
              <i className="fa fa-comment-o" aria-hidden="true"/>
            </button>
            <br/><br/>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowIcon;
