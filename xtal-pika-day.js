import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `xtal-pika-day`
 * Vanilla web component wrapper around pikaday date picker 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XtalPikaDay extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'xtal-pika-day',
      },
    };
  }
}

window.customElements.define('xtal-pika-day', XtalPikaDay);
