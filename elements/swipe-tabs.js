import "../node_modules/@polymer/paper-button/paper-button.js";
import {Element as PolymerElement, html} from "../node_modules/@polymer/polymer/polymer-element.js";

export class SwipeTabs extends PolymerElement {
  static get is() {
    return "swipe-tabs";
  }

  static get template() {
    return html`
    <!-------------------------------------------------------------------------------->
      <style>
        .root {
          box-sizing: border-box;
          border: 5px solid green;
          display: block;
          width: 50vw;
          height: 50vh;
          overflow-x: hidden;
          overflow-y: hidden;
        }
        #hiddenScrollbar {
          box-sizing: border-box;
          /* border: 5px solid green; */
          overflow-x: scroll;
          width: 100%;
        }
        /* .fullDimensions { */
        /*   height: calc(100% + 30px); */
        /*   border: 5px solid pink; */
        /* } */
        .bothTabsContainer {
          box-sizing: border-box;
          /* border: 8px solid red; */
          width: 200%;
        }
        .singleTab {
          box-sizing: border-box;
          height: 100%;
          width: 50%;
          border: 1px solid black;
          display: inline-block;
        }


      </style>
      <div class="root">
        <div id="hiddenScrollbar">
          <div class="bothTabsContainer">
            <div class="singleTab">
              tab one
              </div><div class="singleTab">
              tab two
            </div>
          </div>
        </div>
      </div>
      
    <!-------------------------------------------------------------------------------->`;

  }

  connectedCallback() {
    super.connectedCallback();
    let scrollbarHeight = this.$.hiddenScrollbar.offsetHeight - this.$.hiddenScrollbar.clientHeight
    this.$.hiddenScrollbar.style.height=`calc(100% + ${scrollbarHeight}px`;
    console.log('%cyay', 'font-size:15px');
  }


}

customElements.define(SwipeTabs.is, SwipeTabs);
