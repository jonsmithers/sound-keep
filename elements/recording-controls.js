import "../node_modules/@polymer/paper-fab/paper-fab.js";
import "../node_modules/@polymer/iron-icons/av-icons.js";
import "../node_modules/@polymer/iron-icons/iron-icons.js";
import "../node_modules/@polymer/iron-pages/iron-pages.js";
import {Element as PolymerElement, html} from "../node_modules/@polymer/polymer/polymer-element.js";

export class RecordingControls extends PolymerElement {
  static get is() {
    return "recording-controls";
  }
  static get properties() {
    return {
      visibleButton: {
        type: String,
        value: 'record'
      }
    }
  }
  static get template() {
    return html`
      <style>
        :host {
          display:block;
          height: 100%;
          width: 100%;
          position: relative;
          box-sizing: border-box;
        }
        iron-pages {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 12px;
          display:flex;
          justify-content: center;
        }
        /* paper-icon-button { */
        /*   border-radius: 50%; */
        /*   width: 64px; */
        /*   height: 64px; */
        /* } */
        [icon="av:mic"] {
          background: red;
          color: white;
        }
        [icon="av:stop"] {
          background: red;
          color: white;
        }
      </style>

      <iron-pages selected="[[visibleButton]]" attr-for-selected="data-name">
        <paper-fab data-name="record" icon="av:mic" on-tap="_onRecordTap"></paper-fab>
        <paper-fab data-name="stop" icon="av:stop" on-tap="_onStopTap"></paper-fab>
      </iron-pages>
    `;
  }
  _onRecordTap() {
    this.visibleButton = 'stop'
  }
  _onStopTap() {
    this.visibleButton = 'record'
  }
}

customElements.define(RecordingControls.is, RecordingControls);
