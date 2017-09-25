import React from 'react';
import ShowReadMore from "./ShowReadMore";

class ShowHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <center><h1 className="title" style={{color: "mediumseagreen", "font-family": "TlwgTypewriter" , "font-size" : "80px"}}>
          Instagram</h1></center><br/>
        <h3 className="description" style={{color : "mediumseagreen"}}>Start designing your landing page here.</h3>
        <br/>
        <br/><br/>
        { this.props.isAdding ?
          <ShowReadMore
            getPost={this.props.getPost}
            loadPageId= {this.props.loadPageId}
            title = "Go with me ... "
            isAddComment = {this.props.isAddComment}
            add = "1"
          />
          : <div></div>
        }
      </div>
    );
  }

}
export default ShowHeader;
