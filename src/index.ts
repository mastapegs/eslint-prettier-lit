import { LitElement, html, customElement, TemplateResult } from 'lit-element';

@customElement('app-component')
export default class App extends LitElement {
  private static messageTemplateResult(): TemplateResult {
    return html`
      <p>Integrates with:</p>
      <ul>
        <li>TypeScript</li>
        <li>ESLint</li>
        <li>Prettier</li>
      </ul>
    `;
  }

  static render(): TemplateResult {
    return html`
      <h1>ESLint Testing</h1>
      <p>This project will test eslinting</p>
      ${App.messageTemplateResult()}
    `;
  }
}
