/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Component } from '../component';
import { Properties } from '../properties';
/**
 * Provides methods to help Text DOM.
 */
export declare class Helper extends Class.Null {
    /**
     * Gets a string with all given properties.
     * @param properties Element properties.
     * @returns Returns the element properties string.
     */
    private static getProperties;
    /**
     * Gets a string with all given children.
     * @param children Children list.
     * @returns Returns the children list string.
     * @throws Throws an error when the child type is not supported.
     */
    private static getChildren;
    /**
     * Decorates the specified class to be a custom element.
     * @param name Tag name.
     * @returns Returns the decorator method.
     */
    static Describe(name: string): Class.ClassDecorator;
    /**
     * Creates an element with the specified type.
     * @param type Component type or native element tag name.
     * @param properties Element properties.
     * @param children Element children.
     * @throws Throws an error when the element or component type is not supported.
     */
    static create(type: string | Component, properties: Properties, ...children: any[]): JSX.Element;
    /**
     * Appends the specified children into the given parent element. (Not supported in text mode)
     * @param parent Parent element.
     * @param children Children elements.
     * @returns Returns the parent element.
     * @throws Throws a type error when the child type is unsupported.
     */
    static append(parent: HTMLElement | ShadowRoot, ...children: any[]): HTMLElement | ShadowRoot;
    /**
     * Clear all children of the specified element. (Not supported in text mode)
     * @param element Element instance.
     * @returns Returns the cleared element instance.
     */
    static clear(element: HTMLElement | ShadowRoot): HTMLElement | ShadowRoot;
    /**
     * Unwraps the specified element into its parent.
     * @param element Element instance.
     * @throws Throws an error when the specified element has no parent.
     */
    static unwrap(element: HTMLElement): void;
    /**
     * Determines whether the specified node is a child of the given parent element. (Not supported in text mode)
     * @param parent Parent element.
     * @param node Child node.
     * @returns Returns true when the specified node is child of the given parent, false otherwise.
     */
    static childOf(parent: HTMLElement, node: Node): boolean;
    /**
     * Escape any special HTML characters in the given input string.
     * @param input Input string.
     * @returns Returns the escaped input string.
     */
    static escape(input: string): string;
}
