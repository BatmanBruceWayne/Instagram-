/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, NavLink} from 'react-router-dom';
import {Route} from 'react-router';
import ShowContainer from "../containers/ShowContainer";
import PostPhotoContainer from "../containers/PostPhotoContainer";
import NavbarComponent from "./NavbarComponent";

import PostPhotoComponent from "./PostPhotoComponent";
import ShowUserComponent from "./ShowUserComponent";
import ShowComment from "./ShowComment";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavbarComponent/>
        </div>
        <Switch>
          <Route extra path="/" component={ShowContainer}/>
        </Switch>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
