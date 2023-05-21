import { css } from 'lit';

export default css`
  :host {
    font-family: 'Roboto', sans-serif;

    --main-color-white: #fff;
    --main-color-red: #c70039;
    --main-color-yellow: #c70039;
    --main-color-blue: #12dee1;
    --main-color-dark: black;
  }

  .container {
    width: 100%;
    height: 100%;
    align-text: center;
  }

  #description,
  #label {
    font-family: 'VT323', monospace;
  }

  #label {
    margin-left: 3px;
    font-size: 51px;
  }

  .container.light #label {
    color: var(--main-color-dark);
  }

  .container.dark #label {
    color: var(--main-color-white);
  }

  #input {
    width: 99%;
    height: 35px;
    outline: none;
    border-radius: 10px;
    font-size: 17px;
    background: var(--main-color-white);
    border: 0;
    padding: 5px;
  }

  .container.light #input {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .container.light #input:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0, 0, 0, 0.22);
  }

  .container.dark #input {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.12),
      0 1px 1px rgba(255, 255, 255, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .container.dark #input:hover {
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.25),
      0 3px 5px rgba(255, 255, 255, 0.22);
  }

  #description {
    margin: 0 0 0 3px;
    font-size: 20px;
    color: var(--main-color-dark);
  }

  #description.warning {
    color: var(--main-color-red);
  }

  #description.alert {
    color: var(--main-color-yellow);
  }

  #description.info {
    color: var(--main-color-blue);
  }
  .drag-element {
    cursor: move;
    background: red;
    width: 100px;
    heigth: 100px;
  }

  .drop-zone {
    min-height: 100px;
    border: 2px dashed #000;
    padding: 10px;
    background: black;
    position: relative;
    top: 150px;
    z-index: 1;
  }

  .dragging {
    opacity: 0.5;
  }
  .drag-content-box {
    min-height: 600px;
    border: 2px dashed #000;
    padding: 10px;
    position: relative;
    bottom: 100px;
    z-index: 0;
    background: yellow;
  }
`;
