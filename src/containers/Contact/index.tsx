import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { fetchUser, User } from '@redux/modules/user';

import { Container } from './styles';

interface ContactProps {}

class Contact extends React.Component<ContactProps> {
  componentDidMount() {
    // this.props.fetchUser();
  }

  public render() {
    return <Container />;
  }
}

export default connect(
  state => ({
    user: state.user.user,
  }),
  {
    fetchUser,
  },
)(Contact);
