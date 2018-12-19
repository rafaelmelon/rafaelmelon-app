import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { CSSTransitionGroup } from 'react-transition-group';

import { Image, Link, Input, Button } from '@components/index';
import { theme } from '@theme/index';
import { logo, iconClose } from '@assets/index';

import { Container, ContainerForm, GroupForm, Logo, Close } from './styles';

interface ContactProps {
  intl: InjectedIntl;
  onClose: () => any;
}

class Contact extends React.Component<ContactProps> {
  handleSubmit = values => {
    console.log(values);
  };

  public render() {
    const { intl } = this.props;
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
              <GroupForm>
                <Field
                  name="name"
                  placeholder={intl.formatMessage({
                    id: 'contact.placeholder.name',
                  })}
                  component={Input}
                  type="text"
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
                  component={Input}
                  type="textarea"
                />
              </GroupForm>
              <Button type="submit" text={'header.button'} />
            </form>
          </ContainerForm>
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default reduxForm({
  form: 'contact',
})(injectIntl(Contact));
