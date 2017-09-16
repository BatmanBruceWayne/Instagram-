/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';
import {Switch, NavLink} from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = {color: 'blue'};
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Submited Result</NavLink>
          {' | '}
          <NavLink to="/register" activeStyle={activeStyle}>Register</NavLink>
          {' | '}
          <NavLink to="/login" activeStyle={activeStyle}>Login</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={LoginContainer}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
