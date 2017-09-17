import React from 'react';
import NavbarComponent from './NavbarComponent';


export default class PostPhotoComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
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
          <div className="main">
            <div className="section section-nude">
              <div className="container">
                <h3>Share Your Moment With Everybody</h3>
                <form>
                  <div className="row">
                    <div className="col-md-5 col-sm-5">
                      <h6>Product Image</h6>
                      <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                        <div className="fileinput-new thumbnail img-no-padding"
                             style={{"max-width": "370px", "max-height": "250px"}}/>
                        <img src="http://localhost:63342/pk2-pro-html-v2.0.0/assets/img/image_placeholder.jpg" alt="..." height="700.87" width="522.73"/>
                      </div>
                      <div className="fileinput-preview fileinput-exists thumbnail img-no-padding"
                           style={{"max-width": "370px", "max-height": "250px"}}></div>
                      <div>
                        <span className="btn btn-outline-default btn-round btn-file"><span className="fileinput-new">Select image</span><span
                          className="fileinput-exists">Change</span><input type="hidden"/><input type="file"
                                                                                                 name="..."/></span>
                        <a href="#paper-kit" className="btn btn-link btn-danger fileinput-exists"
                           data-dismiss="fileinput"><i className="fa fa-times"></i> Remove</a>
                      </div>
                    </div>

                    <h6>Tags</h6>
                    <div id="tags">
                      <div className="bootstrap-tagsinput"><span className="badge badge badge-success">Minimal<span
                        data-role="remove"></span></span> <span className="badge badge badge-success"> Light<span
                        data-role="remove"></span></span> <span className="badge badge badge-success"> New<span
                        data-role="remove"></span></span> <span className="badge badge badge-success"> Friends<span
                        data-role="remove"></span></span> <input type="text" placeholder=""/></div>
                      <input type="text" value="Minimal, Light, New, Friends" data-role="tagsinput"
                             style={{display: "none"}}/>
                    </div>
                    <h6>Categories</h6>
                    <div id="tags-2">
                      <div className="bootstrap-tagsinput"><span className="badge badge badge-success">Food<span
                        data-role="remove"></span></span> <span className="badge badge badge-success"> Drink<span
                        data-role="remove"></span></span> <input type="text" placeholder=""/></div>
                      <input type="text" value="Food, Drink" data-role="tagsinput" style={{display: "none"}}/>
                    </div>

                    <h6>Format <span className="icon-danger">*</span></h6>
                    <div className="radio">
                      <input type="radio" name="radio1" id="radio1" value="option1"/>
                      <label for="radio1">
                        Digital
                      </label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="radio1" id="radio2" value="option2" checked=""/>
                      <label for="radio2">
                        Print
                      </label>
                    </div>

                  </div>

                  <div className="col-md-7 col-sm-7">
                    <div className="form-group">
                      <h6>Name <span className="icon-danger">*</span></h6>
                      <input type="text" className="form-control border-input"
                             placeholder="enter the product name here..."/>
                    </div>
                    <div className="form-group">
                      <h6>Tagline <span className="icon-danger">*</span></h6>
                      <input type="text" className="form-control border-input"
                             placeholder="enter the product tagline here..."/>
                    </div>

                    <div className="form-group">
                      <h6>Description</h6>
                      <textarea className="form-control textarea-limited"
                                placeholder="This is a textarea limited to 150 characters."
                                rows="13" maxlength="150"></textarea>
                      <h5>
                        <small><span id="textarea-limited-message" className="pull-right">150 characters left</span>
                        </small>
                      </h5>

                    </div>
                    <div className="checkbox">
                      <input id="checkbox1" type="checkbox"/>
                      <label for="checkbox1">
                        Display on landing page
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>


            <div className="row buttons-row">
              <div className="col-md-4 col-sm-4">
                <button className="btn btn-outline-danger btn-block btn-round">Cancel</button>
              </div>
              <div className="col-md-4 col-sm-4">
                <button className="btn btn-outline-primary btn-block btn-round">Save</button>
              </div>
              <div className="col-md-4 col-sm-4">
                <button className="btn btn-primary btn-block btn-round">Save &amp; Publish</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
