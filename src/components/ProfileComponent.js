import {Redirect} from 'react-router';
import React from 'react';

export default class ProfileComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getPhotoToProfile = this.getPhotoToProfile.bind(this);
    this.directToEdit = this.directToEdit.bind(this);
    this.directToPost = this.directToPost.bind(this);
    this.getProfile = this.getProfile.bind(this);

    this.state = {
      direct: "/profile"
    };
  }

  directToEdit() {
    console.log('direct', this.state);
    this.setState({direct: "/profile-setting"});
    console.log('direct', this.state);
  }

  directToPost() {
    this.setState({direct: "/post_photo"});
  }

  getPhotoToProfile(value) {
    this.props.getPhotoToProfile(value);
  }

  getProfile(){
    this.props.getProfile;
  }

  render() {
    return (
      <div onLoad={() => {
        this.getPhotoToProfile(0);
        this.getProfile;
      }}>
        <div className="wrapper">
          <div className="page-header page-header-small"
               style={{"background-image": "url('http://t.wallpaperweb.org/wallpaper/nature/1920x1080/lakeside_v3_wallpaper_pack_by_mpk_1920x1080.jpg')"}}>

            <div className="filter"></div>
          </div>

          <div className="profile-content section-with-space section-gray">
            <div className="container-fluid">
              <div className="row">

                <div className="col-md-5 text-center">
                  <img
                    src="https://sites.google.com/site/baticlubfcsa/_/rsrc/1476382112707/home/images.jpg?height=236&width=320"
                    className="rounded-circle" width="150px" height="150px" style={{align: 'right'}}/>

                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-5 text-center">
                      <h3>Bruce Wayne</h3>
                    </div>


                    <button className="col-md-5 btn btn-success" onClick={this.directToEdit}>
                      Edit Profile
                      <Redirect to={this.state.direct}/>
                    </button>

                  </div>
                  <div className="row">
                    <div className="col-md-6"><p><b>Gender:  </b>Male</p></div>
                    <div className="col-md-6"><p><b>Phone:  </b>0941439925</p></div>
                  </div>
                  <p><b><b>Yêu màu hường và ghét sự giả dối </b></b></p>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-12 text-center" style={{"margin-top": "30px"}}>

            <button type="button" className="btn btn-success btn-round" onClick={this.directToPost}>
              SHARE YOUR PHOTO WITH US !
              <Redirect to={this.state.direct}/>
            </button>

          </div>

          <div className="latest-offers section-with-space">
            <div className="container">
              <div className="row">
                {
                  this.props.myPhoto.map((object) => {
                    return (
                      <div className="col-md-4">
                        <div className="card card-product card-plain">
                          <div className="card-image">
                            <a href="#">
                              <img
                                src={object.img_url}
                                alt="Rounded Image" className="img-rounded img-responsive"/>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


