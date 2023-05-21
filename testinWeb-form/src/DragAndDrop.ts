/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './testinWed-formStyle';

@customElement('drag-and-drop')
export class DragAndDrop extends LitElement {
  static styles = [style];

  @property({ type: Boolean }) isDragging = false;

  @property({ type: Number }) initialX = 0;

  @property({ type: Number }) initialY = 0;

  protected render() {
    return html`
      <div>
        <div
          id="drag-item"
          class="drag-element ${this.isDragging ? 'dragging' : ''}"
          draggable="true"
          @dragstart=${this.handleDragStart}
        >
          Drag me
        </div>
        <div
          id="drop-box"
          class="drop-zone"
          @dragover=${this.handleDragOver}
          @drop=${this.handleDrop}
        >
          Drop here
        </div>
        <div
          id="drag-content"
          class="drag-content-box"
          @dragover=${this.handleDragOver}
          @drop=${this.handleDropNew}
        >
          Drop it here bro
        </div>
      </div>
    `;
  }

  handleDragStart(event: DragEvent) {
    event.dataTransfer?.setData('text/plain', 'draggedElement');
    this.initialX = event.clientX;
    this.initialY = event.clientY;
    this.isDragging = true;
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const draggedElement = this.shadowRoot?.querySelector('#drag-item');
    const dropZone = this.shadowRoot?.querySelector('#drop-box');

    if (draggedElement && dropZone) {
      dropZone.appendChild(draggedElement);
    }
  }

  handleDropNew(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const draggedContent = this.shadowRoot?.querySelector('#drag-content');
    const draggedElement = this.shadowRoot?.querySelector('#drag-item');

    if (draggedElement && draggedContent) {
      draggedContent?.appendChild(draggedElement);
    }
    console.log(draggedElement, 'que estou', draggedContent);
  }
}
