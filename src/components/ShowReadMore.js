import React from 'react';

class ShowReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : -1
    };
  }

  render() {
    return (
      <div>
        <center>
          <button type="button" className="btn btn-outline-success btn-round" onClick={() => {this.props.getData(this.state.value) }}
                  style={{width: "400px", value: "Readmore..."}}>Be Continue ...
          </button>
        </center>
      </div>
    );
  }

}

export default ShowReadMore;
