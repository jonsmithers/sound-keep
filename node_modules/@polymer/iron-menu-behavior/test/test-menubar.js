import '../../polymer/polymer.js';
import { IronMenubarBehavior } from '../iron-menubar-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <slot></slot>

    <div id="extraContent" tabindex="-1">focusable extra content</div>
`,

  is: 'test-menubar',

  behaviors: [
    IronMenubarBehavior
  ],

  get extraContent() {
    return this.$.extraContent;
  }
});
