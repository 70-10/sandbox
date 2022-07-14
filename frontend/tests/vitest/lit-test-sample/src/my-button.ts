import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-button")
export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property()
  name = "World";

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-button": MyButton;
  }
}
