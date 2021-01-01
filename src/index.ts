import { LitElement, html, customElement } from "lit-element";

@customElement("app-component")
export default class App extends LitElement {
  static render() {
    return html`
      <h1>ESLint Testing</h1>
      <p>This project will test eslinting</p>
    `;
  }
}
