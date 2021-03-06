import "../node_modules/@polymer/iron-icons/av-icons.js";
import "../node_modules/@polymer/iron-icons/iron-icons.js";
import "../node_modules/@polymer/iron-pages/iron-pages.js";
import "../node_modules/@polymer/paper-fab/paper-fab.js";
import {Element as PolymerElement, html} from "../node_modules/@polymer/polymer/polymer-element.js";
import {RecordingSession} from '../RecordingSession.js';

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
      <div id="deleteme"></div>
    `;
  }
  async _onRecordTap() {
    this._recordingSession = new RecordingSession();
    this._recordingSession.start(console.log, console.warn, console.error);
    this.visibleButton = 'stop';
  }
  async _onStopTap() {
    this.visibleButton = 'record';
    await this._recordingSession.stop();
    this.$.deleteme.appendChild(this._recordingSession.getAudioElement());
  }
}

customElements.define(RecordingControls.is, RecordingControls);
