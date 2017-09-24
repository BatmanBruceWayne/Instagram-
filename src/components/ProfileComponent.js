import {Redirect} from 'react-router'
import {Switch, NavLink} from 'react-router-dom';
import {Route} from 'react-router';
import React from 'react';
import ProfileContainer from "../containers/ProfileContainer";
import ProfileSettingComponent from "./ProfileSettingComponent";

export default class ProfileComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getPhotoToProfile=this.getPhotoToProfile.bind(this);
    this.directToSetting = this.directToSetting.bind(this);
    this.directToLogin = this.directToLogin.bind(this);
    this.state ={
      direct : "/profile"
    }
  }
  directToSetting(){
    this.setState({direct:"/profile-setting"});
  }
  directToLogin(){
    localStorage.setItem("token","");
    localStorage.setItem("userid","");
    this.setState({direct:"/login"});
  }
  getPhotoToProfile(value){
    this.props.getPhotoToProfile(value);
  }

  render() {
    return (
      <div onLoad={() => this.getPhotoToProfile(0)}>
        <div className="wrapper">
          <div className="page-header page-header-small"
               style={{"background-image": "url('http://t.wallpaperweb.org/wallpaper/nature/1920x1080/lakeside_v3_wallpaper_pack_by_mpk_1920x1080.jpg')"}}>

            <div className="filter"></div>
          </div>
          <div className="profile-content section-with-space section-gray">
            <div className="container-fluid">
              <div className="row">

                <div className="col-md-3 text-center">
                  <img
                    src="https://sites.google.com/site/baticlubfcsa/_/rsrc/1476382112707/home/images.jpg?height=236&width=320"
                    className="rounded-circle" width="150px" height="150px" style={{align: 'right'}}/>

                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <h3>Bruce Wayne</h3>
                    </div>

                    <button className="col-md-3 btn btn-danger" onClick={this.directToSetting}>
                      Edit Profile
                      <Redirect to={this.state.direct}/>
                    </button>
                    <div className="col-md-1"></div>
                    <button className="col-md-3 btn btn-danger" onClick={this.directToLogin}>
                      Logout
                      <Redirect to={this.state.direct}/>
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><p>4 posts</p></div>
                    <div className="col-md-4"><p>135 followers</p></div>
                    <div className="col-md-4"><p>107 following</p></div>
                  </div>
                  <p><b><b>Nguyễn Tiến Tài</b></b></p>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-12 text-center" style={{"margin-top": "30px"}}>

            <button type="button" className="btn btn-danger btn-round">Danger</button>

              <button className="btn btn-just-icon btn-border btn-youtube" >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </button>

            <button type="button" className="btn btn-danger btn-round">Danger</button>
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
                            <a href="#paper-kit">
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


