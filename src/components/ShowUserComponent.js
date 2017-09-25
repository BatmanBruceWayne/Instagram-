import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class ShowUserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {info : {}};
  }
  componentWillMount() {
    axios.get('http://api.trainingcolorme.tk/profile/'+this.props.user_id+'?token='+localStorage.getItem("token"))
      .then( (response) => {
        this.setState({info:response.data.data.user});
      })
      .catch(function (error) {
        throw (error);
      });
  }

  render() {
    return (
      <div  >
        <div >
          <div className="card-image">
            <h4 className="card-title ">
              <NavLink to="/profile" id="author" style={{"font-size": "15px" , color : "red"}} >
                <img src= {this.state.info.avt_url} width="35px" alt="Circle Image"
                     className="img-circle img-no-padding img-responsive"/><span className="card-category text-success"><h6>{this.state.info.name} || {this.state.info.email}</h6></span>
              </NavLink>
              <br/>
            </h4>
          </div>

        </div>
      </div>
    );
  }
}

export default ShowUserComponent;
