import React from 'react';

export default class ProfileComponent extends React.Component{
  constructor(props, context){
    super(props,context);
  }

  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="page-header page-header-small"
               style="background-image: url('http://www.hdwallpaperspulse.com/wp-content/uploads/2013/08/10/bridge.jpg');">
            <div className="filter"></div>
          </div>
          <div className="profile-content section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 text-center" >
                  <img src="https://sites.google.com/site/baticlubfcsa/_/rsrc/1476382112707/home/images.jpg?height=236&width=320"
                       className="rounded-circle" width="150px" height="150px" style="align:right;"/>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-5 text-center" >
                      <h3>Bruce Wayne</h3>
                    </div>
                    <button className="col-md-5 btn btn-info">Edit Profile</button>
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

          <div className="section latest-offers">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-product card-plain">
                    <div className="card-image">
                      <a href="#paper-kit">
                        <img src="https://i.pinimg.com/736x/73/89/8d/73898d8e27ab3fe6c7764561f91b6813--batman-superman-wonder-woman-batman-artwork.jpg"
                             alt="Rounded Image" className="img-rounded img-responsive"/>
                      </a>

                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-product card-plain">
                    <div className="card-image">
                      <a href="#paper-kit">
                        <img src="https://i.pinimg.com/736x/73/89/8d/73898d8e27ab3fe6c7764561f91b6813--batman-superman-wonder-woman-batman-artwork.jpg"
                             alt="Rounded Image" className="img-rounded img-responsive"/>
                      </a>

                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-product card-plain">
                    <div className="card-image">
                      <a href="#paper-kit">
                        <img src="https://i.pinimg.com/736x/73/89/8d/73898d8e27ab3fe6c7764561f91b6813--batman-superman-wonder-woman-batman-artwork.jpg"
                             alt="Rounded Image" className="img-rounded img-responsive"/>
                      </a>

                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-product card-plain">
                    <div className="card-image">
                      <a href="#paper-kit">
                        <img src="https://i.pinimg.com/736x/73/89/8d/73898d8e27ab3fe6c7764561f91b6813--batman-superman-wonder-woman-batman-artwork.jpg"
                             alt="Rounded Image" className="img-rounded img-responsive"/>
                      </a>

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
