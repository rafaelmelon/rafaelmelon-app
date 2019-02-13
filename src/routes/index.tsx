import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, NotPage } from '@containers/index';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={HomePage} />
    <Route component={NotPage} />
  </Switch>
);

export default Routes;
