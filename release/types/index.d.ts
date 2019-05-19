/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export declare type Element = JSX.Element;
export { Component } from './component';
export { Properties } from './properties';
/**
 * Declarations.
 */
import * as Class from '@singleware/class';
import { Component } from './component';
import { Properties } from './properties';
/**
 * Decorates the specified class to be a custom element.
 * @param name Tag name.
 * @returns Returns the decorator method.
 */
export declare const Describe: (name: string) => Class.ClassDecorator;
/**
 * Creates an element by the specified type.
 * @param type Component type or native element tag name.
 * @param properties Element properties.
 * @param children Element children.
 * @throws Throws a type error when the element or component type is unsupported.
 */
export declare const create: (type: string | Component, properties: Properties, ...children: any[]) => JSX.Element;
/**
 * Appends the specified children into the given parent element.
 * @param parent Parent element.
 * @param children Children elements.
 * @returns Returns the parent element.
 * @throws Throws a type error when the child type is unsupported.
 */
export declare const append: (parent: HTMLElement | ShadowRoot, ...children: any[]) => HTMLElement | ShadowRoot;
/**
 * Clear all children of the specified element.
 * @param element Element instance.
 * @returns Returns the cleared element instance.
 */
export declare const clear: (element: HTMLElement | ShadowRoot) => HTMLElement | ShadowRoot;
/**
 * Unwraps the specified element into its parent.
 * @param element Element instance.
 * @throws Throws an error when the specified element has no parent.
 */
export declare const unwrap: (element: HTMLElement) => void;
/**
 * Determines whether the specified node is child of the given parent element.
 * @param parent Parent element.
 * @param node Child node.
 * @returns Returns true when the specified node is child of the given parent, false otherwise.
 */
export declare const childOf: (parent: HTMLElement | ShadowRoot, node: Node) => boolean;
/**
 * Escape any special HTML character in the given input string.
 * @param input Input string.
 * @returns Returns the escaped input string.
 */
export declare const escape: (input: string) => string;
