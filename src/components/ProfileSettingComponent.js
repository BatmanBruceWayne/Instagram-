import React from 'react';

export default class ProfileSettingComponent extends React.Component{
  constructor(props, context){
    super(props,context);
    this.state = {
      name:'',
      phonenumber:'',
      story:'',
      gender:''
    };
    this.sendProfileOnAPI = this.sendProfileOnAPI.bind(this);
  }

  sendProfileOnAPI(e){
    e.preventDefault();
    this.props.sendProfileOnAPI(this.state);
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
                  <div className="fileinput-new img-no-padding">
                    <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/16106032_359851404373400_3928185856684765804_n.jpg?oh=7d2dc70a8f8b8aeb00718e092a5337ed&oe=5A5A0F61" alt="..."/>
                  </div>
                  <div className="fileinput-preview fileinput-exists img-no-padding"></div>
                  <div>
                    <span className="btn btn-outline-default btn-file btn-round"><span className="fileinput-new">Change Photo</span><span className="fileinput-exists">Change</span><input type="file" name="..."/></span>
                    <br></br>
                      <a href="#paper-kit" className="btn btn-link btn-danger fileinput-exists" data-dismiss="fileinput"><i className="fa fa-times"></i> Remove</a>
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
