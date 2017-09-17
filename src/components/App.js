/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
// import { Route } from 'react-router';
// import { Switch, NavLink } from 'react-router-dom';
// import HomePage from './HomePage';
// import FuelSavingsPage from '../containers/FuelSavingsPage';
// import NotFoundPage from './NotFoundPage';
import ShowContainer from '../containers/ShowContainer';

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
