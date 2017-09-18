import React from 'react';

class ShowReadMore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <center>
          <button type="button" className="btn btn-outline-success btn-round"
                  style={{width: "400px", value: "Readmore..."}}>Readmore ...
          </button>
        </center>
      </div>
    );
  }

}

export default ShowReadMore;
