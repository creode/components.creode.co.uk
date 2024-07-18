import template from "./../components/accordion/main.html?raw";

// Define your web component
class Accordion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

// Register your web component
customElements.define('accordion-component', Accordion);