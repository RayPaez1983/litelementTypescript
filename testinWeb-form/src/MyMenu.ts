/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export class MyMenu extends LitElement {
  @property() clicked = '';

  protected render() {
    return html`
      <div @click="${this._clickHandler}">
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
      </div>
      <p>Clicked: ${this.clicked}</p>
    `;
  }

  private _clickHandler(e: Event) {
    this.clicked =
      e.target === e.currentTarget
        ? 'container'
        : (e.target as HTMLDivElement).textContent!;
  }
}
