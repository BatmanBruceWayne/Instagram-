import React from 'react';

class ShowComment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input className="form-control mr-sm-2 no-border" placeholder="Add comment" type="text"/>
      </div>
    );
  }
}

export default ShowComment;
