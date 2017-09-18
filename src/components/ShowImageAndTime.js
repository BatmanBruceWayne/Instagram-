import React from 'react';

class ShowImageAndTime extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
                    <div>
                      {     /*UPDATE TIME*/      }
                      <div>
                        <p className ="fa fa-clock-o" aria-hidden="true"> Update Time</p>
                        <h6 className="card-category text-success" id = "dateUpdate">{this.props.updated_at}
                        </h6>
                      </div>

                      <p>{this.props.description}</p>
                      {/*IMAGE      */}
                      <div>
                        <a href="#">
                          <img id="image" src = {this.props.img_url}/>
                        </a>
                      </div>
                    </div>
  );
  }
}
export default ShowImageAndTime;
