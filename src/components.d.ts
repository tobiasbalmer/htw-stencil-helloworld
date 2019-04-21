/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface HelloWorld {
    'birthyear': any;
    'firstname': any;
    'lastname': any;
    'sayMyName': () => void;
  }
  interface HelloWorldAttributes extends StencilHTMLAttributes {
    'birthyear'?: any;
    'firstname'?: any;
    'lastname'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'HelloWorld': Components.HelloWorld;
  }

  interface StencilIntrinsicElements {
    'hello-world': Components.HelloWorldAttributes;
  }


  interface HTMLHelloWorldElement extends Components.HelloWorld, HTMLStencilElement {}
  var HTMLHelloWorldElement: {
    prototype: HTMLHelloWorldElement;
    new (): HTMLHelloWorldElement;
  };

  interface HTMLElementTagNameMap {
    'hello-world': HTMLHelloWorldElement
  }

  interface ElementTagNameMap {
    'hello-world': HTMLHelloWorldElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
