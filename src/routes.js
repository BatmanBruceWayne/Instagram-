import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LoginComponent from './components/LoginComponent';

export default (
  <Route path="/" component={LoginComponent}>
    <IndexRoute component={LoginComponent}/>
  </Route>
);
