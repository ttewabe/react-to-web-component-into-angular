import ReactDOM from "react-dom";
import { ComponentClass, createElement, FC } from "react";

type TPropTypes =
  "boolean"
  | "string"
  | "number"
  | "array"
  | "object"
  | "json"
  | "function";
type TReactComponent<T> = FC<T> | ComponentClass<T> | string;

const getParsedValue = (value: string | null, type: TPropTypes) => {
  if (value === undefined) return;

  if (type === "array" || type === "json" || type === "object") {
    try {
      return value !== null ? JSON.parse(value) : undefined;
    } catch (error) {
      console.error("Parsing error: invalid prop value ", value);
      return undefined;
    }
  } else if (type === "number") {
    return Number(value);
  } else if (type === "boolean") {
    return value === "true";
  } else {
    return value;
  }
};

export const reactToWebComponent = <T>(
  Component: TReactComponent<T>,
  tagName: string,
  propTypes: Record<keyof T, TPropTypes>
) => {

  class WebComponent extends HTMLElement {
    props: Partial<T> = {};

    constructor() {
      super();
      //this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return Object.keys(propTypes).map((key) => key.toLowerCase());
    }

    getPropTypeKeys() {
        return Object.keys(propTypes) as Array<keyof T>;
    }

    connectedCallback() {
        const propKeys = this.getPropTypeKeys();
      propKeys.forEach((key) => {
        if (propTypes[key] === "function") {
          this.props[key] = ((...args: unknown[]) => {
            let eventName = key.toString();
            if (eventName.toLowerCase().startsWith("on")) {
              eventName = eventName[2].toLowerCase() + eventName.substring(3);
            }
            const event = new CustomEvent(eventName, {
              detail: args,
              bubbles: true,
              composed: true,
            });
            //this.shadowRoot?.dispatchEvent(event);
            this.dispatchEvent(event);
          }) as T[keyof T];
        } else {
          this.props[key] = getParsedValue(
            this.getAttribute(key.toString())!,
            propTypes[key]
          );
        }
      });
      this.render();
    }

    attributeChangedCallback(
      attrName: string,
      oldValue: string,
      newValue: string
    ) {
      if (oldValue !== newValue) {
        // Match attribute name with propTypes keys
        const propKeys = this.getPropTypeKeys();
        const propKey = propKeys.find((key) => key.toString().toLowerCase() === attrName);
        this.props[propKey!] = getParsedValue(newValue, propTypes[propKey]);
        this.render();
      }
    }

    disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this.shadowRoot!);
    }

    private render() {
      ReactDOM.render(
        createElement(Component as TReactComponent<{}>, this.props),
        this
        //this.shadowRoot
      );
    }
  }

  customElements.define(tagName, WebComponent);
};
