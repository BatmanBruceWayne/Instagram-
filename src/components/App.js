/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';
import {Switch, NavLink} from 'react-router-dom';
import ShowContainer from '../containers/ShowContainer';
import ProfileContainer from "../containers/ProfileContainer";
import PostPhotoContainer from "../containers/PostPhotoContainer";
import LoginComponent from "./LoginComponent";
import LoginContainer from "../containers/LoginContainer";

class App extends React.Component {
  render() {
    return (
      <LoginContainer/>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

