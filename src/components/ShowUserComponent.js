import React from 'react';

class ShowUserComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div className="card-image">
            <h4 className="card-title" align="left">
              <a href="#" id="author" style={{"font-size": "15px"}}>
                <img src="../clem-onojeghuo-2.jpg" width="35px" alt="Circle Image"
                     className="img-circle img-no-padding img-responsive"/>
              </a><p>{this.props.user_name}</p>
            </h4>
          </div>

        </div>
      </div>
    );
  }
}

export default ShowUserComponent;
