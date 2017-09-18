import React from 'react';
import NavbarComponent from './NavbarComponent';


export default class PostPhotoComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mt4WVTVbXPeH-djj7o93I5cSMTblPBWKIoTaMcGte59c-z1iVA",
      description:''
    };
  }

  render() {
    return (
      <div>
        <NavbarComponent/>
        <div className="wrapper">
          <div className="page-header page-header-small"
               style={{"background-image" : "url('http://t.wallpaperweb.org/wallpaper/nature/1920x1080/lakeside_v3_wallpaper_pack_by_mpk_1920x1080.jpg')"}}>
            <div className="filter"></div>
          </div>
          <div className="main center">
            <div className="section section-nude">
              <div className="container">
                <h3 className="text-center">Share Your Moment With Everybody</h3>
                <form>
                    <div className="center">
                      <h6>Your Image</h6>
                      <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                        <div className="fileinput-new thumbnail img-no-padding"
                             style={{"max-width": "370px", "max-height": "250px"}}/>
                        <img src={this.state.photo} alt="..."/>
                      </div>
                      <div className="fileinput-preview fileinput-exists thumbnail img-no-padding"
                           style={{"max-width": "370px", "max-height": "250px"}}></div>
                      <div className="center" style={{padding:"30px"}}>
                        <span className="btn btn-outline-default btn-round btn-file"><span className="fileinput-new">Select image</span><span
                          className="fileinput-exists">Change</span><input type="hidden"/><input type="file"
                                                                                                 name="..."/></span>
                        <button type="button" className="btn btn-danger btn-round">Remove</button>
                      </div>
                    </div>


                  <div className="center">
                    <div className="form-group">
                      <h6>Description</h6>
                      <textarea className="form-control textarea-limited"
                                placeholder="This is a textarea limited to 150 characters."
                                rows="13" maxlength="150"></textarea>
                    </div>

                  </div>
                </form>
              </div>
            </div>


            <div className="row buttons-row">
              <div className="col-md-4 col-sm-4"></div>
              <div className="col-md-4 col-sm-4">
                <button className="btn btn-primary btn-block btn-round">Save &amp; Publish</button>
              </div>
              <div className="col-md-4 col-sm-4"></div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}
