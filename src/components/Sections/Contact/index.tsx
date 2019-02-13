import * as React from 'react';
import { FormattedMessage, InjectedIntl, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';

import { Button, Loader } from '@components/index';
import { ContactForm } from '@forms/index';
import { Theme } from '@theme/index';

import { Container, Feedback, FeedbackText } from './styles';

interface ContactProps {
  intl: InjectedIntl;
  theme: Theme;
  success: string;
  sending: boolean;
  sendContactForm: (values: any) => any;
  resetContactForm: () => any;
}

interface ContactState {
  nameValue: string;
}

class Contact extends React.Component<ContactProps, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = {
      nameValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onResetForm = this.onResetForm.bind(this);
    this.renderContact = this.renderContact.bind(this);
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
    const { sending, success } = this.props;
    return <Container>{this.renderContact({ sending, success })}</Container>;
  }
}

export default withTheme(injectIntl(Contact));
