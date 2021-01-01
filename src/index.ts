import { LitElement, html, customElement } from "lit-element";

@customElement("app-component")
export default class App extends LitElement {
  private messageHTMLTemplate() {
    return html`
      <p>Integrates with:</p>
      <ul>
        <li>TypeScript</li>
        <li>ESLint</li>
        <li>Prettier</li>
      </ul>
    `;
  }

  render() {
    return html`
      <h1>ESLint Testing</h1>
      <p>This project will test eslinting</p>
      ${this.messageHTMLTemplate()}
    `;
  }
}
