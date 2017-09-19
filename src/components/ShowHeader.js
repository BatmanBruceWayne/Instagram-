import React from 'react';

class ShowHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <center><h1 className="title" style={{color: "mediumseagreen", "font-family": "TlwgTypewriter"}}>
          Instagram</h1></center>
        <br/><br/>
      </div>
    );
  }

}
export default ShowHeader;
