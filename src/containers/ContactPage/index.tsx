import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { withTheme } from 'styled-components';

import { iconClose, logoAlt } from '@assets/index';
import { Button, Image, Loader } from '@components/index';
import { ContactForm } from '@forms/index';
import { AppState } from '@redux/modules';
import { resetContactForm, sendContactForm } from '@redux/modules/forms';
import { Theme } from '@theme/index';
import { ROUTES } from '@utils/index';

import {
  ButtonClose,
  ButtonLogo,
  Container,
  ContainerForm,
  Success,
  SuccessContainer,
} from './styles';

interface ContactProps {
  theme: Theme;
  history: any;
  success: string;
  sending: boolean;
  sendContactForm: (values: any) => any;
  resetContactForm: () => any;
}

interface ContactState {
  viewport: {
    width: number | null;
    height: number | null;
  };
  nameValue: string;
}

class ContactPage extends React.Component<ContactProps, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = {
      viewport: {
        height: null,
        width: null,
      },
      nameValue: '',
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onResetForm = this.onResetForm.bind(this);
    this.onNavigateHome = this.onNavigateHome.bind(this);
  }

  public handleResize() {
    this.setState({
      viewport: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
    });
  }

  public componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    document.title = 'Rafael Melón | ContactPage';
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  public handleSubmit(values: object) {
    this.props.sendContactForm(values);
  }

  public handleChange(event: React.FormEvent<EventTarget>): void {
    const target = event.target as HTMLInputElement;
    this.setState({ nameValue: target.value });
  }

  public onResetForm() {
    this.props.resetContactForm();
  }

  public onNavigateHome() {
    this.props.history.push(ROUTES.home);
  }

  public render() {
    const { theme, sending, success } = this.props;

    return (
      <CSSTransitionGroup
        transitionName={'contact'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container viewport={this.state.viewport}>
          <ButtonLogo onClick={this.onNavigateHome} icon={true}>
            <Image src={logoAlt} iconWidth={theme.iconSize.x1} />
          </ButtonLogo>
          <ButtonClose onClick={this.onNavigateHome} icon={true}>
            <Image src={iconClose} iconWidth={theme.iconSize.x1} />
          </ButtonClose>
          <ContainerForm>
            {sending ? (
              <Loader viewport={this.state.viewport} />
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
  )(withTheme(ContactPage)),
);
