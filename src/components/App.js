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
import initialState from '../reducers/initialState';
import RegisterComponent from "./RegisterComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginContainer}/>
          <Route path="/register" component={RegisterComponent}/>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/profile" component={ShowContainer}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;


