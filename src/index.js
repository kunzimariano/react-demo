import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import App from './components/App';
import EventsPage from './components/events/EventsPage';
import NotFound from './components/NotFound';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={EventsPage} />
      <Route path='all' component={EventsPage} />
      <Route path='*' component={NotFound} />
    </Route>    
  </Router>,
  document.getElementById('root')
);
