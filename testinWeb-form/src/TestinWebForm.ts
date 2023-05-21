/* eslint-disable import/extensions */
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import style from './testinWed-formStyle';

@customElement('testinweb-form')
export class TestinWebForm extends LitElement {
  static styles = [style];

  @property({ type: String })
  value = '';

  @property({ type: String }) enviroment = 'light';

  @property({ type: String }) description = 'Default description';

  @property({ type: String, attribute: 'description-type' })
  descriptionType = 'info';

  @property({ type: String }) label = 'Default label';

  @property({ type: String }) placeholder = 'Default placeholder';

  @property({ type: Boolean })
  withDescription = false;

  @property({ type: Boolean })
  withLabel = false;

  @query('#input')
  inputElement!: HTMLInputElement;

  @query('#div')
  divElement!: HTMLDivElement;

  get _getLabel() {
    return this.withLabel ? html`<label id="label">${this.label}</label>` : '';
  }

  get _getDescription() {
    return this.withDescription
      ? html`<label id="description" class="${this.descriptionType}"
          >${this.description}</label
        >`
      : '';
  }

  get _getInput() {
    return html`<input
      type="text"
      placeholder="${this.placeholder}"
      id="input"
      .value="${this.value}"
      onchange="${this.handleChange}"
    />`;
  }

  render() {
    return html`<div class="container ${this.enviroment}">
      ${this._getLabel} ${this._getInput} ${this._getDescription}
      <div id="div"></div>
      <input
        type="text"
        .value="${this.value}"
        @change="${(e: InputEvent) => this.handleChange(e)}"
      />
      ${this.value}
    </div> `;
  }

  handleChange(event: InputEvent) {
    event.preventDefault();
    console.log(event, 'qui fue');
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.divElement.innerText = this.value;
    this.requestUpdate();
    // Do something with the new value
  }
}
