import { React } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import EventsPage from './components/events/EventsPage';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={EventsPage} />
      <Route path='/events' component={EventsPage} />
    </Route>
  </Router>
);
