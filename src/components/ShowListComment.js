import React from 'react';

class ListComment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(" LIST COMMENT",this.props.info);
    if (this.props.post_id === this.props.id) {
      return (
        <div>
          <div className="media">
            <a className="pull-left" href="#paper-kit">
              <div className="avatar">
                <img className="media-object" src={this.props.info.avt_url} alt="..." />
              </div>
            </a>
            <div className="media-body">
              <h5 className="media-heading">{this.props.info.name}</h5>
              <div className="pull-right">
                <h6 className="text-muted">{this.props.updated_at}</h6>
              </div>
              <p>{this.props.content}</p>
            </div>
          </div>
        </div>
      );
    }
    else return (
      <div>
      </div>
    );
  }
}

export default ListComment;
