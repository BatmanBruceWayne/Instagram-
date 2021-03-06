import React from 'react';

class ShowReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : parseInt(this.props.add)
    };
  }

  render() {
    return (
      <div>
        <center>
          <button type="button" className="btn btn-outline-success btn-round" onClick={() => {this.setState({value : this.state.value + 1}); this.props.getPost(this.state.value);  }}
                  style={{width: "400px", value: "Readmore..."}}>{this.props.title}
          </button>
        </center>
      </div>
    );
  }

}

export default ShowReadMore;
