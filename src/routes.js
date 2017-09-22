import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';
import ShowContainer from "./containers/ShowContainer";
import PostPhotoContainer from "./containers/PostPhotoContainer";
import {LoginContainer} from "./containers/LoginContainer";

ReactDOM.render(
  <Route path="/" component={App}>
    <IndexRoute component={PostPhotoContainer}/>
    <Route path="/" component={ShowContainer}/>
    <Route path="/login" component={LoginContainer}/>
    <Route path="/profile" component={ShowContainer}/>
  </Route>,
  document.getElementById('app')

);
registerServiceWorker();
