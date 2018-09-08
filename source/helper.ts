/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Component } from './component';
import { Properties } from './properties';

/**
 * Provides methods that helps with DOM.
 */
@Class.Describe()
export class Helper {
  /**
   * Renderer for temporary elements.
   */
  @Class.Private()
  private static renderer = document.createElement('body');

  /**
   * Creates an element with the specified type.
   * @param type Component type or native element type.
   * @param properties Element properties.
   * @param children Element children.
   * @throws Throws a type error when the element or component type is unsupported.
   */
  @Class.Public()
  public static create(type: string | Component, properties: Properties, ...children: any[]): JSX.Element {
    if (type instanceof Function) {
      return this.createFromComponent(type, properties, ...children);
    } else if (typeof type === 'string') {
      return this.createFromElement(type, properties, ...children);
    } else {
      throw new TypeError(`Unsupported element or component type "${type}"`);
    }
  }

  /**
   * Appends the specified children into the specified parent element.
   * @param parent Parent element.
   * @param children Children elements.
   * @returns Returns the parent element.
   * @throws Throws a type error when the child type is unsupported.
   */
  @Class.Public()
  public static append(element: HTMLElement | ShadowRoot, ...children: any[]): HTMLElement | ShadowRoot {
    for (const child of children) {
      if (child instanceof Node) {
        element.appendChild(child);
      } else if (child instanceof NodeList || child instanceof Array) {
        this.append(element, ...child);
      } else if (typeof child === 'string' || typeof child === 'number') {
        this.renderer.innerHTML = <string>child;
        this.append(element, ...this.renderer.childNodes);
      } else if (child) {
        const node = child.element;
        if (node instanceof Node) {
          this.append(element, node);
        } else {
          throw new TypeError(`Unsupported child type "${child}"`);
        }
      }
    }
    return element;
  }

  /**
   * Clear all children of the specified element.
   * @param element Element instance.
   * @returns Returns the cleared element instance.
   */
  @Class.Public()
  public static clear(element: HTMLElement): HTMLElement {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    return element;
  }

  /**
   * Creates a new component with the specified type.
   * @param type Component type.
   * @param properties Component properties.
   * @param children Component children.
   * @returns Returns the component instance.
   */
  @Class.Private()
  private static createFromComponent(type: Component, properties: Properties, ...children: any[]): JSX.Element {
    return new type(properties, children).element;
  }

  /**
   * Creates a native element with the specified type.
   * @param type Element type.
   * @param properties Element properties.
   * @param children Element children.
   * @returns Returns the element instance.
   */
  @Class.Private()
  private static createFromElement(type: string, properties: Properties, ...children: Element[]): JSX.Element {
    const element = <any>document.createElement(type);
    if (properties) {
      for (const name in properties) {
        if (properties[name] !== void 0) {
          if (name in element) {
            element[name] = properties[name];
          } else {
            element.setAttribute(name, properties[name]);
          }
        }
      }
    }
    return this.append(element, ...children);
  }
}
