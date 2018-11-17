import * as React from 'react';
import SectionsList from '@containers/SectionList';

const reactLogo = require('./../../assets/img/react_logo.svg');
import { Container, Header } from './styles';

const Home = () => (
  <div>
    <Container>
      <Header> Dashboard </Header>
      <SectionsList />
      <img src={reactLogo} height="480" />
    </Container>
  </div>
);

export default Home;
