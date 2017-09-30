import React from 'react';

class ShowHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  render() {
    return (
      <div>
        {/*<div className="section section-cards section-gold">*/}
          {/*<header className="codrops-header">*/}
            {/*<div className="row">*/}
              {/*<div className="col-md-4">*/}
                {/*<div className="section-description">*/}
                  {/*<h3 className="title">Beautiful Cards</h3>*/}
                  {/*<h6 className="category">One Card for Every Problem</h6>*/}
                  {/*<h5 className="description">We have gone above and beyond with options for you to organise your information. From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the Paper Kit style principles and have a design that stands out.  </h5>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</header>*/}
          {/*<section className="section-intro ">*/}
            {/*<div className="isolayer isolayer--deco1 isolayer--shadow " style={{"transform-style": "preserve-3d", transform: "translateX(33vw) translateY(-340px) rotateX(45deg) rotateZ(45deg)"}}>*/}
              {/*<ul className="grid grid--loaded" style={{position: "relative", width: "1200px", height: "1110px"}}>*/}
                {/*<li className="grid__item first-card" style={{position: "absolute", left: "0px", top: "0px", "z-index":" 1"}}>*/}
                  {/*<a className="grid__link" href="index.html#cards" style={{"z-index": "1"}}>*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/purple-card.png" alt="01" style={{transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)" }}/>*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li className="grid__item second-card" style={{position: "absolute", left: "400px", top: "0px", "z-index": "1"}}>*/}
                  {/*<a className="grid__link" href="index.html#cards" style="z-index: 1;">*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/twitter-card.jpg" alt="02" style={{transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}} />*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li className="grid__item third-card" style={{position: "absolute", left: "800px", top: "0px"}}>*/}
                  {/*<a className="grid__link" href="index.html#cards">*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/facebook-card.jpg" alt="03" />*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li className="grid__item fourth-card" style={{position: "absolute", left: "0px" ,top: "300px"}}>*/}
                  {/*<a className="grid__link" href="index.html#cards">*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/pricing-card.jpg" alt="04" />*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li className="grid__item fifth-card" style={{position: "absolute", left: "800px", top: "300px"}}>*/}
                  {/*<a className="grid__link" href="index.html#cards">*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/blog-card.jpg" alt="05" />*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li className="grid__item sixth-card" style={{position: "absolute", left: "400px", top:" 510px" }}>*/}
                  {/*<a className="grid__link" href="index.html#cards">*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/capture.jpg" alt="06" />*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li className="grid__item seventh-card" style={{position: "absolute", left: "0px", top: "600px"}}>*/}
                  {/*<a className="grid__link" href="index.html#cards">*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/team-card.jpg" alt="07" />*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li className="grid__item eight-card" style={{position: "absolute", left: "800px", top: "600px"}}>*/}
                  {/*<a className="grid__link" href="index.html#cards">*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/testimonal-card.jpg" alt="07" />*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li className="grid__item ninth-card" style={{position: "absolute", left: "400px", top: "810px"}}>*/}
                  {/*<a className="grid__link" href="index.html#cards">*/}
                    {/*<img className="grid__img layer" src="assets/img/presentation-page/try/pricing-card-icon.jpg" alt="07" />*/}
                  {/*</a>*/}
                {/*</li>*/}
              {/*</ul>*/}
            {/*</div>*/}
          {/*</section>*/}

        {/*</div>*/}
        <div className="page-header" data-parallax="true"
             style={{"background-image": "url(../Girl.jpg)"}}>
          <div className="filter"></div>
          <div className="content-center">
            <div className="container">
              <div className="motto">
                <div>
                  <center><h1 className="title"
                              style={{color: "mediumseagreen", "font-family": "TlwgTypewriter", "font-size": "80px"}}>
                    Instagram</h1></center>
                  <br/>
                  <h3 className="description" style={{color: "mediumseagreen"}}>Start designing your landing page
                    here.</h3>
                  <br/>
                  <br/><br/>
                  <div>
                    <center>
                      <button type="button" className="btn btn-outline-success btn-round" onClick={() => {
                        this.setState({value: this.state.value + 1});
                        this.props.getPost(this.state.value);
                        this.props.isAddHeader();
                      }}
                              style={{width: "400px", value: "Readmore..."}}>Go with me ...
                      </button>
                    </center>
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

export default ShowHeader;
