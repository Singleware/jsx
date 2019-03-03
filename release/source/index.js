"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Current helper according to the environment.
 */
const Helper = require(`./helpers/${typeof window !== 'undefined' ? 'browser' : 'text'}`).Helper;
/**
 * Decorates the specified class to be a custom element.
 * @param name Tag name.
 * @returns Returns the decorator method.
 */
exports.Describe = (name) => Helper.Describe(name);
/**
 * Creates an element by the specified type.
 * @param type Component type or native element tag name.
 * @param properties Element properties.
 * @param children Element children.
 * @throws Throws a type error when the element or component type is unsupported.
 */
exports.create = (type, properties, ...children) => Helper.create(type, properties, ...children);
/**
 * Appends the specified children into the given parent element.
 * @param parent Parent element.
 * @param children Children elements.
 * @returns Returns the parent element.
 * @throws Throws a type error when the child type is unsupported.
 */
exports.append = (parent, ...children) => Helper.append(parent, ...children);
/**
 * Clear all children of the specified element.
 * @param element Element instance.
 * @returns Returns the cleared element instance.
 */
exports.clear = (element) => Helper.clear(element);
/**
 * Unwraps the specified element into its parent.
 * @param element Element instance.
 * @throws Throws an error when the specified element has no parent.
 */
exports.unwrap = (element) => Helper.unwrap(element);
/**
 * Determines whether the specified node is child of the given parent element.
 * @param parent Parent element.
 * @param node Child node.
 * @returns Returns true when the specified node is child of the given parent, false otherwise.
 */
exports.childOf = (parent, node) => Helper.childOf(parent, node);
/**
 * Escape any special HTML character in the given input string.
 * @param input Input string.
 * @returns Returns the escaped input string.
 */
exports.escape = (input) => Helper.escape(input);
