import React from 'react';

export default class ProfileSettingComponent extends React.Component{
  constructor(props, context){
    super(props,context);
    this.state = {
      name:'',
      phonenumber:'',
      story:'',
      gender:'',
      photo_url:this.props.myProfile.photo,
      photo_file:''
    };
    this.sendProfileOnAPI = this.sendProfileOnAPI.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

  }

  sendProfileOnAPI(e){
    e.preventDefault();
    this.props.sendProfileOnAPI(this.state);
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

  render(){
    return(
      <div className="wrapper">
        <div className="page-header page-header-xs settings-background" style={{"background-image" : "url('https://static.topcv.vn/company_logos/color-me-57e118423cae2.jpg')", width: '100%', 'z-index' : 0}}>
          <div className="filter"></div>
        </div>
        <div className="profile-content section">
          <div className="container">
            <div className="row">
              <div className="profile-picture">
                <div className="fileinput fileinput-new" data-provides="fileinput">
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
                        <input type="text" className="form-control border-input" placeholder="Name" onChange={(e)=>this.setState({name:e.target.value})}/>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Gender</label>
                        <input type="text" className="form-control border-input" placeholder="Gender" onChange={(e)=>this.setState({gender:e.target.value})}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control border-input" placeholder="Phone" onChange={(e)=>this.setState({phonenumber:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label>Story</label>
                    <textarea className="form-control textarea-limited" placeholder="This is a textarea limited to 150 characters." rows="3"  maxlength ="150" onChange={(e)=>this.setState({story:e.target.value})}/>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-wd btn-info btn-round" onClick={this.sendProfileOnAPI}>Save</button>
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
