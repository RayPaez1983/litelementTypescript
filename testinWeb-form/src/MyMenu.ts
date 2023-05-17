/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-menu')
export class MyMenu extends LitElement {
  @property() clicked = '';

  protected render() {
    return html`
      <div>
        <button @click="${this._showTitle}">Show Title</button>
        <button @click="${this._showDescription}">Show Description</button>
      </div>
    `;
  }

  private _showTitle(e: PointerEvent) {
    this.dispatchEvent(new Event('show-title'));
    (e.target as HTMLInputElement).setPointerCapture(e.pointerId);
  }

  private _showDescription(e: PointerEvent) {
    this.dispatchEvent(new Event('show-description'));
    (e.target as HTMLInputElement).setPointerCapture(e.pointerId);
  }
}
