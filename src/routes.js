import { React } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import EventsPage from './components/events/EventsPage';
import NotFound from './components/NotFound';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={EventsPage} />
      <Route path='events' component={EventsPage} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
);
