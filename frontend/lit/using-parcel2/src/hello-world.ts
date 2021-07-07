import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("hello-world")
export class HelloHelloWorld extends LitElement {
  @property()
  name?: string = "World";

  render() {
    return html` <p>Hello, World!</p> `;
  }
}
