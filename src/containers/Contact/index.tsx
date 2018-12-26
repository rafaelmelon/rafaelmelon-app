import * as React from 'react';
import { injectIntl, InjectedIntl, FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { CSSTransitionGroup } from 'react-transition-group';
import { withTheme } from 'styled-components';
import { withRouter } from 'react-router-dom';

import { Image, Input, Textarea, Button } from '@components/index';
import { Theme } from '@theme/index';
import { logo, iconClose } from '@assets/index';

import {
  Container,
  ContainerForm,
  GroupForm,
  ButtonLogo,
  ButtonClose,
} from './styles';

interface ContactProps {
  theme: Theme;
  intl: InjectedIntl;
  history: any;
}

class Contact extends React.Component<ContactProps> {
  state = {
    windowHeight: null,
    windowWidth: null,
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
    console.log(values);
  };

  onNavigateHome = () => {
    this.props.history.push('/');
  };

  public render() {
    const { intl, theme } = this.props;

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
                  component={Textarea}
                  type="textarea"
                />
              </GroupForm>
              <Button type="submit">
                <FormattedMessage id={'header.button'} />
              </Button>
            </form>
          </ContainerForm>
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default withRouter(
  reduxForm({
    form: 'contact',
  })(injectIntl(withTheme(Contact))),
);
