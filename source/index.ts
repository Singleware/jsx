/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Component } from './component';
export { Component } from './component';

import { Properties } from './properties';
export { Properties } from './properties';

const environment = typeof window !== 'undefined' ? 'browser' : 'text';
const Helper = require(`./helpers/${environment}`).Helper;

/**
 * Decorates the specified class to be a custom element.
 * @param name Tag name.
 * @returns Returns the decorator method.
 */
export const Describe = (name: string): Class.ClassDecorator => {
  return Helper.Describe(name);
};

/**
 * Creates an element by the specified type.
 * @param type Component type or native element tag name.
 * @param properties Element properties.
 * @param children Element children.
 * @throws Throws a type error when the element or component type is unsupported.
 */
export const create = (type: string | Component, properties: Properties, ...children: any[]): JSX.Element => {
  return Helper.create(type, properties, ...children);
};

/**
 * Appends the specified children into the given parent element.
 * @param parent Parent element.
 * @param children Children elements.
 * @returns Returns the parent element.
 * @throws Throws a type error when the child type is unsupported.
 */
export const append = (parent: HTMLElement | ShadowRoot, ...children: any[]): HTMLElement | ShadowRoot => {
  return Helper.append(parent, ...children);
};

/**
 * Clear all children of the specified element.
 * @param element Element instance.
 * @returns Returns the cleared element instance.
 */
export const clear = (element: HTMLElement | ShadowRoot): HTMLElement | ShadowRoot => {
  return Helper.clear(element);
};

/**
 * Determines whether the specified node is child of the given parent element.
 * @param parent Parent element.
 * @param node Child node.
 * @returns Returns true when the specified node is child of the given parent, false otherwise.
 */
export const childOf = (parent: HTMLElement | ShadowRoot, node: Node): boolean => {
  return Helper.childOf(parent, node);
};
