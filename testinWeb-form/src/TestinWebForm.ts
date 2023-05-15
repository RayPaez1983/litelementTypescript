/* eslint-disable import/extensions */
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import style from './testinWed-formStyle';

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

  @property({ type: Boolean, attribute: 'with-description' })
  withDescription = false;

  @property({ type: Boolean, attribute: 'with-label' })
  withLabel = false;

  @query('#input')
  inputElement!: HTMLInputElement;

  @query('#div')
  divElement!: HTMLDivElement;

  eventEmitter() {
    console.log('entra o no entra');
    this.addEventListener('input', () => {
      this.value = this.inputElement.value;
    });
  }

  updated() {
    this.divElement.innerText = this.value;
  }

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
      onchange="${this.handleChange}"
    />`;
  }

  render() {
    console.log(this.value, 'the value');
    return html`<div class="container ${this.enviroment}">
      ${this._getLabel} ${this._getInput} ${this._getDescription}
      <div id="div"></div>
      <input
        type="text"
        .value="${this.value}"
        @change="${this.handleChange}"
      />
      ${this.value}
    </div> `;
  }

  handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    // Do something with the new value
    console.log(this.value, 'que esto');
  }
}
