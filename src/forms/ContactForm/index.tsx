import * as React from 'react';
import { injectIntl, InjectedIntl, FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { validate } from '@utils/index';

import { Input, Textarea, Button } from '@components/index';

import { GroupForm } from './styles';

interface ContactProps {
  intl: InjectedIntl;
  submitting: boolean;
  handleSubmit: (values: any) => void;
  handleChange: (event: any) => void;
}

class ContactForm extends React.Component<ContactProps> {
  public render() {
    const { intl, submitting } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <GroupForm>
          <Field
            name="name"
            placeholder={intl.formatMessage({
              id: 'contact.placeholder.name',
            })}
            component={Input}
            type="text"
            onChange={this.props.handleChange}
          />
        </GroupForm>
        <GroupForm>
          <Field
            name="email"
            placeholder={intl.formatMessage({
              id: 'contact.placeholder.email',
            })}
            component={Input}
            type="email"
          />
        </GroupForm>
        <GroupForm>
          <Field
            name="notes"
            placeholder={intl.formatMessage({
              id: 'contact.placeholder.textarea',
            })}
            component={Textarea}
            type="textarea"
          />
        </GroupForm>
        <Button type="submit" disabled={submitting}>
          <FormattedMessage id={'contact.button.send'} />
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  validate,
  form: 'contact',
})(injectIntl(ContactForm));
