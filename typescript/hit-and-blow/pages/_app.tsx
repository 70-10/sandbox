import * as React from "react";
import { Provider } from "react-redux";
import App, { AppContext } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore, ReduxStore } from "../app/store";

type Props = {
  store: ReduxStore;
};

export default withRedux(initStore)(
  class extends App<Props> {
    static async getInitialProps({ Component, ctx }: AppContext) {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

      return { pageProps };
    }
    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
);
