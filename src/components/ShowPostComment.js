import React from 'react';
import axios from 'axios';

class PostComment extends React.Component{
  constructor (props) {
    super(props);
    this.state = {content : ''};
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
            <textarea className="form-control" placeholder="Write a comment..." rows="2" onChange={(e) => {this.setState({content:e.target.value}); }}/>
            <div className="media-footer">
              <button className="btn btn-info pull-right" onClick={() => { this.props.postComment(this.props.id, this.state) ;this.props.getComment(); this.props.getComment();  }}>Reply</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default PostComment;
