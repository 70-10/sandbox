import * as React from "react";
import { Head, Main, NextScript } from "next/document";

export default () => (
  <html>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
    </Head>
    <body>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <h1 className="title navbar-item">Hit & Blow</h1>
          </div>
        </div>
      </nav>
      <Main />
      <NextScript />
    </body>
  </html>
);
