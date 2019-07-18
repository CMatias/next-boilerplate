import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import store from '@store';

class MyApp extends App {
  static async getInitialProps(props) {
    let pageProps = {};

    if (props.Component.getInitialProps) {
      pageProps = await props.Component.getInitialProps(props.ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(store)(MyApp);
