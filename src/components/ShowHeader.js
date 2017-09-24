import React from 'react';

class ShowHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <center><h1 className="title" style={{color: "mediumseagreen", "font-family": "TlwgTypewriter" , "font-size" : "80px"}}>
          Instagram</h1></center><br/>
        <h3 className="description">Start designing your landing page here.</h3>
        <br/>
        <br/><br/>
      </div>
    );
  }

}
export default ShowHeader;
