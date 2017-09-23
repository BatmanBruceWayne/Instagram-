import React from 'react';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';
import ShowContainer from "./containers/ShowContainer";
import ProfileContainer from "./containers/ProfileContainer";

ReactDOM.render(
  <Route path="/" component={App}>
    <IndexRoute component={ShowContainer}/>
    <Route path="/profile" component={ProfileContainer}/>
  </Route>,
  document.getElementById('app'));


