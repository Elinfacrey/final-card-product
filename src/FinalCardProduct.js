import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './FinalCardProduct-styles.js';
import "@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js";
import "@bbva-web-components/bbva-form-rating/bbva-form-rating.js";

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<final-card-product></final-card-product>
```

##styling-doc

@customElement final-card-product
*/
export class FinalCardProduct extends LitElement {
  static get is() {
    return 'final-card-product';
  }

  // Declare properties
  static get properties() {
    return {
      item: { type:Array},
      nombre:{type:String},
      imagen:{type:String},
      cantidad:{type:Number}
      
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.item = [];
    this.nombre = "";
    this.imagen = "";
    this.cantidad ;
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('final-card-product-shared-styles')
    ];
  }
async firstUpdated(){
  let cp = this.shadowRoot.querySelector('bbva-web-card-product');
  console.log("cp",cp);
  cp.setAttribute('style',    'margin-left: 10%;'+'margin-right:10%;'+'margin-top:10%;'+'background-color: beige;');

  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <div class="final-card-product">
      ${this.items.map((i) => html `
      <bbva-web-card-product   image="${i.imagen}" heading="${i.nombre}" preheading="Nuevo" subheading="cantidad : ${i.cantidad}" button-text="Confirmar Compra" link-text="Envìo gratis">
      </bbva-web-card-product>
       <br>
      `)}  
      </div>
     
    `;
  }
}
