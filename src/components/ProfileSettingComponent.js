import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import {Redirect} from 'react-router';

class ProfileSettingComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.myProfile.name,
      phonenumber: this.props.myProfile.phonenumber,
      story: this.props.myProfile.story,
      gender: this.props.myProfile.gender,
      photo_url: this.props.myProfile.avt_url,
      photo_file: '',
      alert: null,
      direct:"/profile-setting"
    };

    this.sendProfileOnAPI = this.sendProfileOnAPI.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.sendProfileOnAPI = this.sendProfileOnAPI.bind(this);
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

  sendProfileOnAPI() {
    this.props.sendProfileOnAPI(this.state);
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
    this.sendProfileOnAPI();
  }

  hideAlert() {
    this.setState({
      alert: null,
      direct:"/profile"
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="page-header page-header-xs settings-background" style={{
          "background-image": "url('https://static.topcv.vn/company_logos/color-me-57e118423cae2.jpg')",
          width: '100%',
          'z-index': 0
        }}>
          <div className="filter"></div>
        </div>
        <div className="profile-content section">
          <div className="container">
            <div className="row">
              <div className="profile-picture">
                <div>
                  <div className="img-no-padding">
                    <img
                      src={this.state.photo_url}
                      className="rounded-circle" width="150px" height="150px" style={{align: 'right'}}/>
                  </div>
                  <div>
                    <span className="btn btn-outline-default btn-file btn-round">
                      <span>Change Photo</span>
                      <input type="file" onChange={this.handleImageChange}/>
                    </span>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <form className="settings-form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control border-input" placeholder={this.state.name}
                               onChange={(e) => this.setState({name: e.target.value})}/>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Gender</label>
                        <input type="text" className="form-control border-input" placeholder={this.state.gender}
                               onChange={(e) => this.setState({gender: e.target.value})}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control border-input" placeholder={this.state.phonenumber}
                           onChange={(e) => this.setState({phonenumber: e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label>Story</label>
                    <textarea className="form-control textarea-limited"
                              placeholder={this.state.story} rows="3" maxlength="150"
                              onChange={(e) => this.setState({story: e.target.value})}/>
                  </div>

                  <div className="text-center">
                    <a
                      onClick={() => this.congratulation()}
                      className='btn btn-success btn-round'
                    >
                      <i className="fa fa-save" aria-hidden="true"></i> Save Change
                      <Redirect to={this.state.direct}/>
                    </a>
                    {this.state.alert}
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

export default ProfileSettingComponent;
