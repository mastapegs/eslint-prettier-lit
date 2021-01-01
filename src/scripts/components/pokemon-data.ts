import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  property,
} from 'lit-element';

import('./single-pokemon').then();

@customElement('pokemon-data')
export default class PokemonData extends LitElement {
  @property({ type: Object }) data: any = {};

  render(): TemplateResult {
    return html`
      <p>Pokemon Data</p>
      <pre>${JSON.stringify(this.data, null, 2)}</pre>
      <br />
      ${this.data.results.map(
        (pokemon: { name: string; url: string }) =>
          html`<single-pokemon .pokemon="${pokemon}"></single-pokemon>`
      )}
    `;
  }
}
