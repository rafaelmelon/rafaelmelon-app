import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App, Page } from '@containers/index';

class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/page" component={Page} />
      </Switch>
    );
  }
}

export default Routes;
