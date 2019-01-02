import { ContactPage, HomePage, NotPage } from '@containers/index';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotPage} />
      </Switch>
    );
  }
}

export default Routes;
