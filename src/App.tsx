import { History, Location } from 'history';
import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import * as Sentry from '@sentry/browser';
import styled, { createGlobalStyle } from 'styled-components';
import { withCookies } from 'react-cookie';

import AppHelmet from './components/AppHelmet';
import MobileAppPrompt from './components/MobileAppPrompt';
import Routes from './components/Routes';
import { setLocation } from './store/actions/router';
import { getCurrentUser } from './store/actions/auth';

import './styles/index.scss';
import config from '../config';
import logScreen from './helpers/logScreen';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) =>
      props.path === '/evaluator' ? '#F4F3F2' : '#fff'};
  }
`;

interface IOwnProps {
  location: Location;
  history: History;
}

interface IDispatchProps {
  setLocation(location: Location): void;
  getCurrentUser(token: string): void;
}

interface IState {
  isLoading: boolean;
}

type IProps = IOwnProps & IDispatchProps;

if (config('sentryClient')) {
  Sentry.init({dsn: "https://27ec45db857d4436a63fda1d633f13db@sentry.io/1796030"});
}
class App extends React.Component<IProps, IState> {
  state = {
    isLoading: true,
  };

  public async componentDidMount() {
    const token = this.props.cookies.get('authToken');
    if (token) {
      await this.props.getCurrentUser(token);
    }

    this.setState({ isLoading: false }, () => {
      // Registering the first page because it's won't be handled by the listener
      logScreen();
      // To dispatch a location change redux action every time the route changes.
      this.props.history.listen((location, action) => {
        this.props.setLocation(location);
        logScreen();
      });
    });
  }

  public render() {
    if (this.state.isLoading) {
      // temporary fix to allow authentication before displaying the meta data for the progress page.
      // in the future this should apply to all AuthType.PRIVATE pages
      if(this.props.location.pathname === "/progress"){
        return null;
      }
      <AppHelmet path={this.props.location.pathname} />;
    }

    return (
      <Container>
        <GlobalStyle path={this.props.location.pathname} />
        <AppHelmet path={this.props.location.pathname} />
        <Routes />
        <MobileAppPrompt />
      </Container>
    );
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 900px;
  margin: auto;

  .rtl {
    direction: rtl;
  }

  .text-center {
    text-align: center;
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    setLocation: (location: Location) => {
      dispatch(setLocation(location));
    },
    getCurrentUser: (token: string) => dispatch(getCurrentUser(token)),
  };
};

const enhanced = compose(
  withRouter,
  injectIntl,
  withCookies,
  connect(
    null,
    mapDispatchToProps
  )
);

export default enhanced(App);
