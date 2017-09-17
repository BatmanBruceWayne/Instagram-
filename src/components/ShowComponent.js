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
                        <div className="col-md-2 " />

                        <div className="col-md-12">
                          <center><h1 className="title" style={{color:"mediumseagreen", "font-family" : "TlwgTypewriter"}} >Instagram</h1></center>
                          <br/><br/> <hr/>
                          <div className="card card-blog">


                            {/*USER        */}


                            <div className="card-image">
                              <h4 className="card-title" align="left">
                                <a href="#" id="author" style={{"font-size" : "15px"}}>
                                  <img src="../clem-onojeghuo-2.jpg" width="35px" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                  Hung
                                </a>
                                <p>DESCRIPTION</p>
                              </h4><br/><br/>
                            </div>



                            {/*IMAGE      */}
                            <div>
                              <a href="#">
                                <img id="image" src = "../forest-bg.jpg"/>
                              </a>
                            </div>


                            {/*COMMENT + LIKE ICON  */}

                            <div className="card-block">
                              <div className="row">
                                <div className="col-md-2">
                                  <button className="btn btn-just-icon btn-border btn-google">
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                  </button>
                                  <span className="card-title">
                                    <a href="#pablo" id="like">23like</a>
                                </span>
                                </div>
                                <div className="col-md-2">
                                  <button className="btn btn-just-icon btn-border btn-github">
                                    <i className="fa fa-comment-o" aria-hidden="true" />
                                  </button>
                                  <br/><br/>
                                </div>
                              </div>
                              <hr/>

                              {/*COMMENT       */}

                              <input className="form-control mr-sm-2 no-border" placeholder="Add comment" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2" />
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
