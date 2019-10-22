import React from "react";
import Head from "next/head";
import Top from "../compositions/top";

type Props = {
  title: string;
};

class App extends React.Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return { title: "Hit and Blow" };
  }
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Top />
      </>
    );
  }
}

export default App;
