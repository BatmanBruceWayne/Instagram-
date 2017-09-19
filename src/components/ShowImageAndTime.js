import React from 'react';

class ShowImageAndTime extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div>
          {/*UPDATE TIME*/}
          {/*IMAGE      */}
          <div>
            <a href={this.props.img_url}>
              <img id="image" src={this.props.img_url}/>
            </a>
          </div>
          <br/>
          <div className="col-md-4 offset-md-8" >
            <h6 className="card-category text-success"><i className="fa fa-clock-o"/>
              Update at : {this.props.updated_at}</h6>
          </div>
          <br/>
          <div style={{color: "mediumseagreen"}}>
            <div className="card-block" style={{
              "border-left": "solid 3px red",
              margin: "20px",
              "padding-top": "0px",
              "padding-bottom": "0px"
            }}>
              <p>vnsfoivodv vjdslvjj lisdjclskdj sdlsdl sjdl sdnclksndk nsdkvnksdnvdo dslkdsl sldkdsl sdl sld lkskdl
                dsksdllksll klskl ksldk dls klk skldk klsdk lsdls klsdldvnsdlvshd kwsr svhs</p>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default ShowImageAndTime;
