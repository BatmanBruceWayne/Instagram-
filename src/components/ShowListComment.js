import React from 'react';
import axios from 'axios';

class ListComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {info : {}};
  }
  componentDidMount() {
    axios.get('http://api.trainingcolorme.tk/profile/'+this.props.user_id+'?token='+localStorage.getItem("token"))
      .then( (response) => {
        this.setState({info:response.data.data.user});
      })
      .catch(function (error) {
        throw (error);
      });
  }
  render() {
    console.log(" INFO COMMENT",this.state.info);
    if (this.props.post_id === this.props.id) {
      return (
        <div>
          <div className="media">
            <a className="pull-left" href="#paper-kit">
              <div className="avatar">
                <img className="media-object" src={this.state.info.avt_url} alt="..." />
              </div>
            </a>
            <div className="media-body">
              <h5 className="media-heading">{this.state.info.name}</h5>
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
