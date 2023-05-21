import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import './TestinWebForm.js';
import './MyMenu.js';

export class App extends LitElement {
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

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <testinWeb-form
        .withLabel=${this.withLabel}
        .withDescription=${this.withDescription}
        .description="${this.description}"
        .label="${this.label}"
        .placeholder="${this.placeholder}"
      >
      </testinWeb-form>
      <my-menu
        @show-title=${() => {
          this.withLabel = !this.withLabel;
        }}
        @show-description=${() => {
          this.withDescription = !this.withDescription;
        }}
      ></my-menu>
    `;
  }
}
