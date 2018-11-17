import * as React from 'react';

const reactLogo = require('./../../assets/img/react_logo.svg');
import { Container, Header } from './styles';

interface IProps {
  compiler: string;
  framework: string;
}

export default class Home extends React.Component<IProps, undefined> {
  public render() {
    return (
      <Container>
        <Header> Dashboard </Header>
        <img src={reactLogo} height="480" />
      </Container>
    );
  }
}
