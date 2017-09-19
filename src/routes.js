import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';
import ShowContainer from "./containers/ShowContainer";
import PostPhotoContainer from "./containers/PostPhotoContainer";

ReactDOM.render(
  <Route path="/" component={App}>
    <IndexRoute component={PostPhotoContainer}/>
    <Route path="/" component={ShowContainer}/>
    <Route path="/profile" component={ShowContainer}/>
  </Route>,
  document.getElementById('app')
);
registerServiceWorker();
