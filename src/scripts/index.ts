import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  property,
} from 'lit-element';

interface PokemonResponse {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

import('./components/pokemon-data').then();
@customElement('app-component')
export default class App extends LitElement {
  @property({ attribute: false }) pokemonResponseData:
    | Promise<PokemonResponse>
    | PokemonResponse = {
    count: null,
    next: null,
    previous: null,
    results: [],
  };

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

  private static async getPokemonData(): Promise<PokemonResponse> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    return data;
  }

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
