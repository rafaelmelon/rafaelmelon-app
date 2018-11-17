import * as React from 'react';
import Home from './Home';

interface IProps {
  compiler: string;
  framework: string;
}

export default class App extends React.Component<IProps, undefined> {
  public render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Foo to the barz</p>
        <Home compiler={'Hello'} framework={'By'} />
      </div>
    );
  }
}
