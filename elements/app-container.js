import "../node_modules/@polymer/paper-button/paper-button.js";
import "../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../node_modules/@polymer/paper-tabs/paper-tabs.js";
import "./swipe-tabs.js";
import {Element as PolymerElement, html} from "../node_modules/@polymer/polymer/polymer-element.js";

export class AppContainer extends PolymerElement {
  static get is() {
    return "app-container";
  }
  static get template() {
    return html`
    <!-------------------------------------------------------------------------------->
      <style>
        swipe-tabs {
          width: 100%;
          box-sizing: border-box;
          /* height: calc(100vh - 128px); */
          border:5px solid black;
        }
        app-toolbar {
          background: var(--paper-blue-500);
          color: white;
        }
        app-toolbar paper-tabs {
          height:100%;
          width: 100%;
        }
        .verticalFlex {
          display: flex;
          flex-direction: column;
          height: 100%; /* vh has weirdness with hiding url bar */
        }
        .verticalFlex > * {
          flex-shrink: 0;
        }
        .flewGrow {
          flex-grow: 1;
          height: 0;
        }
      </style>
      <div class="verticalFlex">
      <!-- <app-header> -->
        <app-toolbar>
          <!-- <div main-title>Record</div> -->
          <paper-tabs>
            <paper-tab>Record</paper-tab>
            <paper-tab>Listen</paper-tab>
          </paper-tabs>
        </app-toolbar>
      <!-- </app-header> -->
      <swipe-tabs class="flewGrow"></swipe-tabs>
    <!-------------------------------------------------------------------------------->
    `;
  }
}

customElements.define(AppContainer.is, AppContainer);
