/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Component } from '../component';
import { Properties } from '../properties';

/**
 * Provides methods to help with Text DOM.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Decorates the specified class to be a custom element.
   * @param name Tag name.
   * @returns Returns the decorator method.
   */
  @Class.Public()
  public static Describe(name: string): Class.ClassDecorator {
    return (type: Class.Constructor): Class.Constructor => {
      return type;
    };
  }
  /**
   * Creates an element with the specified type.
   * @param type Component type or native element tag name.
   * @param properties Element properties.
   * @param children Element children.
   * @throws Throws an error when the element or component type is not supported.
   */
  @Class.Public()
  public static create(type: string | Component, properties: Properties, ...children: any[]): JSX.Element {
    if (type instanceof Function) {
      return new type(properties, children).element;
    } else if (typeof type === 'string') {
      return `<${type}${this.getProperties(properties)}>${this.getChildren(children)}</${type}>`;
    } else {
      throw new TypeError(`Unsupported element or component type "${type}"`);
    }
  }

  /**
   * Appends the specified children into the given parent element. (Not supported in text mode)
   * @param parent Parent element.
   * @param children Children elements.
   * @returns Returns the parent element.
   * @throws Throws a type error when the child type is unsupported.
   */
  @Class.Public()
  public static append(parent: HTMLElement | ShadowRoot, ...children: any[]): HTMLElement | ShadowRoot {
    throw new Error(`Operation not supported in text mode.`);
  }

  /**
   * Clear all children of the specified element. (Not supported in text mode)
   * @param element Element instance.
   * @returns Returns the cleared element instance.
   */
  @Class.Public()
  public static clear(element: HTMLElement | ShadowRoot): HTMLElement | ShadowRoot {
    throw new Error(`Operation not supported in text mode.`);
  }

  /**
   * Unwraps the specified element into its parent.
   * @param element Element instance.
   */
  @Class.Public()
  public static unwrap(element: HTMLElement): void {
    throw new Error(`Operation not supported in text mode.`);
  }

  /**
   * Determines whether the specified node is a child of the given parent element. (Not supported in text mode)
   * @param parent Parent element.
   * @param node Child node.
   * @returns Returns true when the specified node is child of the given parent, false otherwise.
   */
  @Class.Public()
  public static childOf(parent: HTMLElement, node: Node): boolean {
    throw new Error(`Operation not supported in text mode.`);
  }

  /**
   * Gets a string with all given properties.
   * @param properties Element properties.
   * @returns Returns the element properties string.
   */
  @Class.Private()
  private static getProperties(properties: Properties): string {
    let output = '';
    for (const property in properties) {
      if (properties[property] !== void 0) {
        output += ` ${property.toLowerCase()}="${properties[property]}"`;
      }
    }
    return output;
  }

  /**
   * Gets a string with all given children.
   * @param children Children list.
   * @returns Returns the children list string.
   * @throws Throws an error when the child type is not supported.
   */
  @Class.Private()
  private static getChildren(children: any[]): string {
    let output = '';
    for (const child of children) {
      if (typeof child === 'string' || typeof child === 'number') {
        output += child;
      } else if (child instanceof Array) {
        output += this.getChildren(child);
      } else if (child) {
        const node = child.element;
        if (node) {
          output += this.getChildren([node]);
        } else {
          throw new TypeError(`Unsupported child type "${child}"`);
        }
      }
    }
    return output;
  }
}
