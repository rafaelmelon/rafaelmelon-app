import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, NotPage } from '@containers/index';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route component={NotPage} />
  </Switch>
);

export default Routes;
