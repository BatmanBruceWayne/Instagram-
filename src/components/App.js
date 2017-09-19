/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';


// import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";
import ProfileComponent from './ProfileComponent';
// import NavbarComponent from "./NavbarComponent";
import ShowContainer from "../containers/ShowContainer";
import NavbarComponent from "./NavbarComponent";
import PostPhotoComponent from "./PostPhotoComponent";
import ShowComment from "./ShowComment";
import ShowHeader from "./ShowHeader";
import ShowImageAndTime from "./ShowImageAndTime";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
<ShowContainer />
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
