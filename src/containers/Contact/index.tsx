import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';

import { AppState } from '@redux/modules';
import { fetchUser, User } from '@redux/modules/user';
import { Image, Link } from '@components/index';
import { theme } from '@theme/index';
import { logo, iconClose } from '@assets/index';

import { Container, ContainerForm, Logo, Close } from './styles';

interface ContactProps {
  user: User;
  fetchUser: () => any;
  onClose: () => any;
}

class Contact extends React.Component<ContactProps> {
  componentDidMount() {
    // this.props.fetchUser();
  }

  handleSubmit = values => {
    console.log(values);
  };

  public render() {
    return (
      <CSSTransitionGroup
        transitionName={'contact'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container>
          <Logo>
            <Link href={'#'}>
              <Image src={logo} iconWidth={theme.iconSize.x2} />
            </Link>
          </Logo>
          <Close onClick={this.props.onClose}>
            <Image src={iconClose} iconWidth={theme.iconSize.x2} />
          </Close>
          <ContainerForm>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </ContainerForm>
        </Container>
      </CSSTransitionGroup>
    );
  }
}

const form = reduxForm({ form: 'Contact' });
export default connect(
  (state: AppState) => ({
    user: state.user.user,
  }),
  {
    fetchUser,
  },
)(form(Contact));
