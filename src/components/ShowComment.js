import React from 'react';

class ShowComment extends React.Component {
  constructor(props) {
    super(props  );

  }

  render() {
    console.log("COMPONENT_COMMENT", this.props.isAdding);
    if ( !this.props.isAdding ){
      return (
        <div>
          <hr/>
          <input className="form-control mr-sm-2 no-border" placeholder="Add comment" type="text"/>
        </div>
      );
    }
    else {return (
      <div>
      </div>
    );}
  }
}

export default ShowComment;
