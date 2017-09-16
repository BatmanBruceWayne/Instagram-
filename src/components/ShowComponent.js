import React from 'react';



class ShowComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="blog-2 section section-gray">
          <div className="container ">
            <div className="row">
              <div className="content-center">
                <div className="col-md-10 offset-md-1">


                  <div className="row">
                    <div className="col-md-2 ">
                    </div>


                    <div className="col-md-8">
                      <h1 className="title" style="color:mediumseagreen ; font-family: TlwgTypewriter" align="center">Gallery</h1>
                    <br/>
                    <div className="card card-blog">




                      <div className="card-image">
                        <h4 className="card-title">
                          <img src="" width="40px" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                            <a href="#pablo" id="author" />
                        </h4><br/><br/>


                        <a href="#pablo">
                          <img id="image"/>
                        </a>
                      </div>



                      <div className="card-block">
                        <div>
                          <button className="btn btn-just-icon btn-border btn-google">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </button>
                          <span className="card-title">
                                    <a href="#pablo" id="like">23like</a>
                                </span>
                          <button className="btn btn-just-icon btn-border btn-github">
                            <i className="fa fa-comment-o" aria-hidden="true" />
                          </button>
                          <br/><br/>
                          <hr/>
                        </div>


                        <input className="form-control mr-sm-2 no-border" placeholder="Add comment" type="text" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-2" style="height: 300px;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
    );
  }
}
  export default ShowComponent ;
