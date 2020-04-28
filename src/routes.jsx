import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './views/Home';
import BookPage from './views/BookPage';

const Routes = () => {
  return(
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books/:id" component={BookPage} />
      </Switch>
    </Router>
  )
};

export default Routes;
