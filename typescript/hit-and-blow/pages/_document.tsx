import * as React from "react";
import Document, { DocumentContext } from "next/document";
import DefaultLayout from "../layouts/index";

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return <DefaultLayout />;
  }
}
