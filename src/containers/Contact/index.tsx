import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { withTheme } from 'styled-components';
import { withRouter } from 'react-router-dom';

import { AppState } from '@redux/modules';
import { sendContactForm, resetContactForm } from '@redux/modules/forms';
import { Image, Button, Loader } from '@components/index';
import { ContactForm } from '@forms/index';
import { Theme } from '@theme/index';
import { logo, iconClose } from '@assets/index';

import {
  Container,
  ContainerForm,
  ButtonLogo,
  ButtonClose,
  SuccessContainer,
  Success,
} from './styles';

interface ContactProps {
  theme: Theme;
  history: any;
  success: string;
  sending: boolean;
  sendContactForm: (values: any) => any;
  resetContactForm: () => any;
}

class Contact extends React.Component<ContactProps> {
  state = {
    windowHeight: null,
    windowWidth: null,
    nameValue: '',
  };

  handleResize = () =>
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleSubmit = values => {
    this.props.sendContactForm(values);
  };

  handleChange = event => {
    this.setState({ nameValue: event.target.value });
  };

  onResetForm = () => {
    this.props.resetContactForm();
  };

  onNavigateHome = () => {
    this.props.history.push('/');
  };

  public render() {
    const { theme, sending, success } = this.props;

    return (
      <CSSTransitionGroup
        transitionName={'contact'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container windowHeight={this.state.windowHeight}>
          <ButtonLogo onClick={this.onNavigateHome} icon={true}>
            <Image src={logo} iconWidth={theme.iconSize.x1} />
          </ButtonLogo>
          <ButtonClose onClick={this.onNavigateHome} icon={true}>
            <Image src={iconClose} iconWidth={theme.iconSize.x1} />
          </ButtonClose>
          <ContainerForm>
            {sending ? (
              <Loader />
            ) : success ? (
              <SuccessContainer>
                <Success>
                  <FormattedMessage
                    id="contact.success"
                    values={{ name: this.state.nameValue }}
                  />
                </Success>
                <Button onClick={this.onResetForm}>
                  <FormattedMessage id={'contact.button.reset'} />
                </Button>
              </SuccessContainer>
            ) : (
              <ContactForm
                onSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            )}
          </ContainerForm>
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default withRouter(
  connect(
    (state: AppState) => ({
      success: state.forms.success,
      sending: state.forms.sending,
    }),
    {
      sendContactForm,
      resetContactForm,
    },
  )(withTheme(Contact)),
);
