import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  property,
} from 'lit-element';

@customElement('pokemon-data')
export default class PokemonData extends LitElement {
  @property({ type: Object }) data = {};

  render(): TemplateResult {
    return html` <pre>${JSON.stringify(this.data, null, 2)}</pre> `;
  }
}
