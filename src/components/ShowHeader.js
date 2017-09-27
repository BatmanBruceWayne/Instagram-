import React from 'react';

class ShowHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div className="page-header" data-parallax="true"
             style={{"background-image": "url(../Girl.jpg)"}}>
          <div className="filter"></div>
          <div className="content-center">
            <div className="container">
              <div className="motto">
                <div>
                  <center><h1 className="title"
                              style={{color: "mediumseagreen", "font-family": "TlwgTypewriter", "font-size": "80px"}}>
                    Instagram</h1></center>
                  <br/>
                  <h3 className="description" style={{color: "mediumseagreen"}}>Start designing your landing page
                    here.</h3>
                  <br/>
                  <br/><br/>
                  <div>
                    <center>
                      <button type="button" className="btn btn-outline-success btn-round" onClick={() => {
                        this.setState({value: this.state.value + 1});
                        this.props.getPost(this.state.value);
                        this.props.isAddHeader();
                      }}
                              style={{width: "400px", value: "Readmore..."}}>Go with me ...
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ShowHeader;
