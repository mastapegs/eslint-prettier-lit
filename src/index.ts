import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  property,
} from 'lit-element';

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

  @property() pokemonData = {};

  async firstUpdated(): Promise<void> {
    this.pokemonData = await App.getPokemonData();
  }

  render(): TemplateResult {
    return html`
      <h1>ESLint Testing</h1>
      <p>This project will test eslinting</p>
      ${App.messageTemplateResult()}
      <pre>${JSON.stringify(this.pokemonData, null, 2)}</pre>
    `;
  }
}
