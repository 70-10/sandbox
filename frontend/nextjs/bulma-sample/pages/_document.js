import Document, { Head, Main, NextScript } from "next/document";
import Header from "../components/FixedHeader";
export default class MyDocument extends Document {
  render() {
    return (
      <html className="has-navbar-fixed-top">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Bulma Samples</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
