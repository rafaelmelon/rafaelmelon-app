import { History } from 'history';
import * as React from 'react';
import { FormattedMessage, InjectedIntl, injectIntl } from 'react-intl';
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
  Container,
  ContainerForm,
  Feedback,
  FeedbackText,
  MenuContact,
} from './styles';

interface ContactProps {
  intl: InjectedIntl;
  theme: Theme;
  history: History;
  success: string;
  sending: boolean;
  sendContactForm: (values: any) => any;
  resetContactForm: () => any;
}

interface ContactState {
  nameValue: string;
}

class ContactPage extends React.Component<ContactProps, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = {
      nameValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onResetForm = this.onResetForm.bind(this);
    this.onNavigateHome = this.onNavigateHome.bind(this);
  }

  public componentDidMount() {
    document.title = this.props.intl.formatMessage({
      id: 'contact.title.page',
    });
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

  public renderContact({ sending, success }) {
    if (sending) {
      return <Loader />;
    }

    if (success) {
      if (success !== 'error') {
        return (
          <Feedback>
            <FeedbackText>
              <FormattedMessage
                id="contact.success"
                values={{ name: this.state.nameValue }}
              />
            </FeedbackText>
            <Button onClick={this.onResetForm}>
              <FormattedMessage id={'contact.button.reset'} />
            </Button>
          </Feedback>
        );
      } else {
        return (
          <Feedback>
            <FeedbackText>
              <FormattedMessage id="contact.error" />
            </FeedbackText>
            <Button onClick={this.onResetForm}>
              <FormattedMessage id={'contact.button.reset'} />
            </Button>
          </Feedback>
        );
      }
    }

    return (
      <ContactForm
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
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
        <Container>
          <MenuContact>
            <Button onClick={this.onNavigateHome} icon={true}>
              <Image src={logoAlt} iconWidth={theme.iconSize.x1} />
            </Button>
            <Button onClick={this.onNavigateHome} icon={true}>
              <Image src={iconClose} iconWidth={theme.iconSize.x1} />
            </Button>
          </MenuContact>
          <ContainerForm>
            {this.renderContact({ sending, success })}
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
  )(withTheme(injectIntl(ContactPage))),
);
