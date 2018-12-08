import * as React from 'react';
import { connect } from 'react-redux';

import { fetchAuth } from '@redux/modules/user';
import { Footer, Loader } from '@components/index';
import { Header, Elements } from '@containers/index';

import { Container } from './styles';

interface Home {
  fetchAuth: () => any;
}

class Home extends React.Component<Home, any> {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);

    this.props.fetchAuth();
  }

  public render() {
    const { loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <Container>
        <Header />
        <Elements />
        <Footer />
      </Container>
    );
  }
}

export default connect(
  () => ({}),
  {
    fetchAuth,
  },
)(Home);
