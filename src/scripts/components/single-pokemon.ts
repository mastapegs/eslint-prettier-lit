import {
  LitElement,
  property,
  customElement,
  html,
  TemplateResult,
} from 'lit-element';

@customElement('single-pokemon')
export default class SinglePokemon extends LitElement {
  @property() pokemon = {};

  render(): TemplateResult {
    return html`<pre>${JSON.stringify(this.pokemon, null, 2)}</pre>`;
  }
}
