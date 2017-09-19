import React from 'react';
import NavbarComponent from './NavbarComponent';


export default class PostPhotoComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      file: '',
      photo: 'http://images.tapchianhdep.net/15-10top-12-hinh-anh-girl-xinh-de-thuong-nhat-viet-nam11.jpg',
      description: ''
    };
    this.sendPhotoOnAPINoLoad = this.sendPhotoOnAPINoLoad.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        photo: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  sendPhotoOnAPINoLoad(e) {
    e.preventDefault();
    this.props.sendPhotoOnAPI(this.state);
  }

  render() {
    return (
      <div>
        <NavbarComponent/>
        <div className="wrapper">
          <div className="page-header page-header-small"
               style={{"background-image": "url('http://www.wallpapers13.com/wp-content/uploads/2016/02/Natural-Spring-lake-mountain-snow-island-beautiful-background-915x515.jpg')"}}>
            <div className="filter"></div>
          </div>
          <div className="main">
            <div className="section section-nude">
              <div className="container">
                <h3>Share your photos with everybody on earth</h3>
                <form onSubmit={this.handleSubmit}>

                  <h6>Your image</h6>
                  <div className="fileinput  text-center">
                    <div className=" thumbnail img-no-padding">
                      <img src={this.state.photo} alt="..."/>
                    </div>
                    <div>
                          <span className="btn btn-outline-default btn-round btn-file">
                            <span>Select image from your Computer</span>
                            <input type="file" onChange={this.handleImageChange}/>
                          </span>
                      <button type="button" className="btn btn-danger btn-round"
                              onClick={() => this.setState({photo: ''})}>Remove
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <h6>Select Photo On Internet You Like</h6>
                    <input type="text" className="form-control border-input"
                           placeholder="enter the product name here..."
                           onChange={(e) => this.setState({photo: e.target.value})}/>
                  </div>

                  <div className="form-group">
                    <h6>Description</h6>
                    <textarea className="form-control textarea-limited"
                              placeholder="This is a textarea limited to 150 characters." rows="13"
                              maxlength="150" onChange={(e) => (this.setState({description: e.target.value}))}/>
                  </div>
                  <div className="row buttons-row">
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block btn-round" onClick={this.sendPhotoOnAPINoLoad}>Save &
                        Publish
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
