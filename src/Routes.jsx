import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
    <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
  </Switch>
);

export default Routes;
