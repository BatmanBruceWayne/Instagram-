import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class ShowUserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {info : {}};
  }
  componentDidMount() {
    axios.get('http://api.trainingcolorme.tk/profile/'+this.props.user_id+'?token='+localStorage.getItem("token"))
      .then( (response) => {
        this.setState({info:response.data.data.user});
        console.log("AXIOS POST",this.state.info);
      })
      .catch(function (error) {
        throw (error);
      });
  }

  render() {
    return (
      <div  >
        <div >
          {    console.log("INFORMATION",this.state.info , this.props.user_id)
          }
          <div className="card-image">
            <h4 className="card-title">
              <NavLink to="/profile" id="author" style={{"font-size": "15px"}} >
                <img src= {this.state.info.avt_url} width="35px" alt="Circle Image"
                     className="img-circle img-no-padding img-responsive"/>
              </NavLink>
              <br/>
              <p>{this.state.info.name}</p>
            </h4>
          </div>

        </div>
      </div>
    );
  }
}

export default ShowUserComponent;
