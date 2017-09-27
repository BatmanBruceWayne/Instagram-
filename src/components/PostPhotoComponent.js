import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import {Redirect} from 'react-router';

export default class PostPhotoComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      photo_file: '',
      photo_url: '',
      description: '',
      alert:null,
      direct:"/post_photo"
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.sendPhotoOnAPINoLoad = this.sendPhotoOnAPINoLoad.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        photo_file: file,
        photo_url: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  sendPhotoOnAPINoLoad(e) {
    this.props.sendPhotoOnAPI(this.state);
  }

  congratulation() {
    const getAlert = () => (
      <SweetAlert
        success
        title="Changes saved !"
        onConfirm={() => this.hideAlert()}
      >
        Press "OK" to back your profile !
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
    this.sendPhotoOnAPINoLoad();
  }

  hideAlert() {
    this.setState({
      alert: null,
      direct:"/profile"
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="page-header page-header-small"
               style={{"background-image": "url('http://www.wallpapers13.com/wp-content/uploads/2016/02/Natural-Spring-lake-mountain-snow-island-beautiful-background-915x515.jpg')"}}>
            <div className="filter"></div>
          </div>
          <div className="main">
            <div className="section section-nude">
              <div className="container">
                <h3>Share your photos with everybody on earth</h3>
                <form>

                  <h6>Your image</h6>
                  <div className="fileinput  text-center">
                    <div className=" thumbnail img-no-padding">
                      <img src={this.state.photo_url} alt="..."/>
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
                      <a className="btn btn-primary btn-block btn-round" onClick={()=>this.congratulation()}>Save &
                        Publish
                        <Redirect to={this.state.direct}/>

                      </a>
                      {this.state.alert}
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
