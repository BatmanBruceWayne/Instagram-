import React from 'react';
import ShowUserComponent from "./ShowUserComponent";
import ShowCommentAndIcon from './ShowCommentAndIcon';
import ShowImageAndTime from './ShowImageAndTime';
import ShowReadMore from "./ShowReadMore";
import NavbarComponent from './NavbarComponent';

class ShowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPost: [
        {
          "id": 1,
          "description": "gai",
          "img_url": "../Girl (5).jpg",
          "user_id": 20,
          "created_at": "2017-09-17 08:17:52",
          "updated_at": "2017-09-17 08:17:52",
          "deleted_at": null,
          "like": 0,
          "user_name": "Nguyen Tuan Hung"
        },
        {
          "id": 1,
          "description": "gai",
          "img_url": "../Girl (6).jpg",
          "user_id": 20,
          "created_at": "2017-09-17 08:17:52",
          "updated_at": "2017-09-17 08:17:52",
          "deleted_at": null,
          "like": 0,
          "user_name": "Nguyen Tien Tai"
        },
        {
          "id": 1,
          "description": "gai",
          "img_url": "../Girl (12).jpg",
          "user_id": 20,
          "created_at": "2017-09-17 08:17:52",
          "updated_at": "2017-09-17 08:17:52",
          "deleted_at": null,
          "like": 0,
          "user_name": "ahihihihi"
        },
        {
          "id": 1,
          "description": "gai",
          "img_url": "../Girl (12).jpg",
          "user_id": 20,
          "created_at": "2017-09-17 08:17:52",
          "updated_at": "2017-09-17 08:17:52",
          "deleted_at": null,
          "like": 0,
          "user_name": "Hieu"
        },
        {
          "id": 1,
          "description": "gai",
          "img_url": "../Girl (13).jpg",
          "user_id": 20,
          "created_at": "2017-09-17 08:17:52",
          "updated_at": "2017-09-17 08:17:52",
          "deleted_at": null,
          "like": 0,
          "user_name": "Kiyoshitaro"
        },
        {
          "id": 1,
          "description": "gai",
          "img_url": "http://trainingcolorme.tk/uploads/images/1505636272382a6d7c0e618a7e6caa2f133ddc0fa8.png",
          "user_id": 20,
          "created_at": "2017-09-17 08:17:52",
          "updated_at": "2017-09-17 08:17:52",
          "deleted_at": null,
          "like": 0,
          "user_name": 0
        }
      ]
    };
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
                    <NavbarComponent/>
                    <div className="col-md-2 " />
                    <div className="col-md-10" >
                      <center><h1 className="title" style={{color: "mediumseagreen", "font-family": "TlwgTypewriter"}}>
                        Instagram</h1></center>
                      <br/><br/>
                      {this.state.listPost.map(
                        (value) => {
                          return (
                            <div className="card card-blog" style={{backgroundColor: "#FFFAF0"}}>
                              <ShowUserComponent
                                user_name={value.user_name}
                              />
                              <ShowImageAndTime
                                description={value.description}
                                img_url={value.img_url}
                                updated_at={value.updated_at}
                              />
                              <ShowCommentAndIcon
                                like={value.like}
                              />
                              <br/><br/>
                            </div>
                          );
                        }
                      )
                      }
                      <center><ShowReadMore/></center>
                    </div>

                    <div className="col-md-2">
                    </div>
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

export default ShowComponent;
