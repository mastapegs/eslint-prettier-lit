import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  property,
} from 'lit-element';

import('./components/pokemon-data').then();
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

  private static async getPokemonData(): Promise<object[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    return data;
  }

  @property() pokemonResponseData = {};

  async firstUpdated(): Promise<void> {
    this.pokemonResponseData = await App.getPokemonData();
  }

  render(): TemplateResult {
    return html`
      <h1>ESLint Testing</h1>
      <p>This project will test eslinting</p>
      ${App.messageTemplateResult()}
      <pokemon-data .data="${this.pokemonResponseData}"></pokemon-data>
    `;
  }
}
