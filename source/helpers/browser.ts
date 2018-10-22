/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Component } from '../component';
import { Properties } from '../properties';

/**
 * Provides methods to help with Browser DOM.
 */
@Class.Describe()
export class Helper {
  /**
   * Known events to automate listeners.
   */
  @Class.Private()
  private static eventMap = [
    // Form events
    'onblur',
    'onchange',
    'oncontextmenu',
    'onfocus',
    'oninput',
    'oninvalid',
    'onreset',
    'onsearch',
    'onselect',
    'onsubmit',
    // Keyboard events
    'onkeydown',
    'onkeypress',
    'onkeyup',
    // Mouse events
    'onclick',
    'ondblclick',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onwheel',
    // Drag events
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'onscroll',
    // Clipboard events
    'oncopy',
    'oncut',
    'onpaste',
    // Media events
    'onabort',
    'oncanplay',
    'oncanplaythrough',
    'oncuechange',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onseeked',
    'onseeking',
    'onstalled',
    'onsuspend',
    'ontimeupdate',
    'onvolumechange',
    'onwaiting',
    // Misc events
    'ontoggle'
  ] as string[];

  /**
   * Renderer for temporary elements.
   */
  @Class.Private()
  private static renderer = document.createElement('body') as HTMLBodyElement;

  /**
   * Creates an element with the specified type.
   * @param type Component type or native element tag name.
   * @param properties Element properties.
   * @param children Element children.
   * @throws Throws a type error when the element or component type is unsupported.
   */
  @Class.Public()
  public static create(type: string | Component, properties: Properties, ...children: any[]): JSX.Element {
    if (type instanceof Function) {
      return new type(properties, children).element;
    } else if (typeof type === 'string') {
      return this.createFromElement(type, properties, ...children);
    } else {
      throw new TypeError(`Unsupported element or component type "${type}"`);
    }
  }

  /**
   * Appends the specified children into the given parent element.
   * @param parent Parent element.
   * @param children Children elements.
   * @returns Returns the parent element.
   * @throws Throws a type error when the child type is unsupported.
   */
  @Class.Public()
  public static append(parent: HTMLElement | ShadowRoot, ...children: any[]): HTMLElement | ShadowRoot {
    for (const child of children) {
      if (child instanceof Node) {
        parent.appendChild(child);
      } else if (child instanceof NodeList || child instanceof Array) {
        this.append(parent, ...child);
      } else if (typeof child === 'string' || typeof child === 'number') {
        this.renderer.innerHTML = <string>child;
        this.append(parent, ...this.renderer.childNodes);
      } else if (child) {
        const node = child.element;
        if (node instanceof Node) {
          this.append(parent, node);
        } else {
          throw new TypeError(`Unsupported child type "${child}"`);
        }
      }
    }
    return parent;
  }

  /**
   * Clear all children of the specified element.
   * @param element Element instance.
   * @returns Returns the cleared element instance.
   */
  @Class.Public()
  public static clear(element: HTMLElement | ShadowRoot): HTMLElement | ShadowRoot {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    return element;
  }

  /**
   * Determines whether the specified node is a child of the given parent element.
   * @param parent Parent element.
   * @param node Child node.
   * @returns Returns true when the specified node is child of the given parent, false otherwise.
   */
  @Class.Public()
  public static childOf(parent: HTMLElement | ShadowRoot, node: Node): boolean {
    while (node.parentElement) {
      if (node.parentElement === parent) {
        return true;
      }
      node = node.parentElement;
    }
    return false;
  }

  /**
   * Assign the specified properties into the given element.
   * @param element Element instance.
   * @param properties Element properties.
   */
  @Class.Private()
  private static assignProperties(element: HTMLElement, properties: Properties): void {
    for (const property in properties) {
      if (properties[property] === void 0) {
        continue;
      }
      if (property in element) {
        (element as any)[property] = properties[property];
      } else {
        const event = property.toLowerCase();
        if (this.eventMap.includes(event)) {
          element.addEventListener(event.substr(2), properties[property]);
        } else {
          element.setAttribute(property, properties[property]);
        }
      }
    }
  }

  /**
   * Creates a native element with the specified type.
   * @param type Element type.
   * @param properties Element properties.
   * @param children Element children list.
   * @returns Returns the element instance.
   */
  @Class.Private()
  private static createFromElement(type: string, properties: Properties, ...children: JSX.Element[]): HTMLElement {
    const element = <HTMLElement>document.createElement(type);
    if (properties) {
      this.assignProperties(element, properties);
    }
    return this.append(element, ...children) as HTMLElement;
  }
}
