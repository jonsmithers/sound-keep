import '../../polymer/polymer.js';
import { IronMenubarBehavior } from '../iron-menubar-behavior.js';
import '../../paper-styles/color.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      :host > ::slotted(*) {
        display: inline-block;
      }

      :host > ::slotted(.iron-selected) {
        color: white;
        background-color: var(--google-red-500);
      }
    </style>

    <slot></slot>
`,

  is: 'simple-menubar',

  behaviors: [
    IronMenubarBehavior
  ]
});
