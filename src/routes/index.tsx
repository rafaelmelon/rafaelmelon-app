import { Contact, Home, NotFound } from '@containers/index';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
