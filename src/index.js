import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import EventsPage from './components/events/EventsPage';
import NotFound from './components/NotFound';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={EventsPage} />
      <Route path='events' component={EventsPage} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>,
  document.getElementById('root')
);
