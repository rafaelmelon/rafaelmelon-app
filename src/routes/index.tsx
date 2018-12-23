import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App, NotFound } from '@containers/index';

class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
