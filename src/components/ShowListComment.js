import React from 'react';
import axios from 'axios';

class ListComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {info : {}};
  }

  render() {
    if (this.props.post_id === this.props.id) {
      axios.get('http://api.trainingcolorme.tk/profile/'+this.props.user_id+'?token='+localStorage.getItem("token"))
        .then( (response) => {
          this.setState({info:response.data.data.user});
        })
        .catch(function (error) {
          throw (error);
        });
      return (
        <div marginHeight="0px">
          <div className="media">
            <a className="pull-left">
              <div className="avatar">
                <img className="media-object" src={this.state.info.avt_url} alt="..." />
              </div>
            </a>
            <div className="media-body">
              <h6 className="media-body card-category text-danger" style={{color : "red"}}>[{this.state.info.name}]<small className="card-category text-success">  #{this.state.info.email} | {this.props.updated_at}</small></h6>
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
