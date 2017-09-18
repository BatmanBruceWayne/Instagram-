import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import ShowContainer from './containers/ShowContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="show" component={ShowContainer}/>
  </Route>
);
