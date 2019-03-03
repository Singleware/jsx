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
export declare class Helper extends Class.Null {
    /**
     * Known events to automate listeners.
     */
    private static eventMap;
    /**
     * Renderer for temporary elements.
     */
    private static renderer;
    /**
     * Assign the specified properties into the given element.
     * @param element Element instance.
     * @param properties Element properties.
     */
    private static assignProperties;
    /**
     * Creates a native element with the specified type.
     * @param type Element type.
     * @param properties Element properties.
     * @param children Children list.
     * @returns Returns the element instance.
     */
    private static createFromElement;
    /**
     * Decorates the specified class to be a custom element.
     * @param name Tag name.
     * @returns Returns the decorator method.
     */
    static Describe(name: string): Class.ClassDecorator;
    /**
     * Creates an element by the specified type.
     * @param type Component type or native element tag name.
     * @param properties Element properties.
     * @param children Element children.
     * @throws Throws a type error when the element or component type is unsupported.
     */
    static create(type: string | Component, properties: Properties, ...children: any[]): JSX.Element;
    /**
     * Appends the specified children into the given parent element.
     * @param parent Parent element.
     * @param children Children elements.
     * @returns Returns the parent element.
     * @throws Throws a type error when the child type is unsupported.
     */
    static append(parent: HTMLElement | ShadowRoot, ...children: any[]): HTMLElement | ShadowRoot;
    /**
     * Clear all children of the specified element.
     * @param element Element instance.
     * @returns Returns the cleared element instance.
     */
    static clear(element: HTMLElement | ShadowRoot): HTMLElement | ShadowRoot;
    /**
     * Unwraps the specified element into its parent.
     * @param element Element instance.
     */
    static unwrap(element: HTMLElement): void;
    /**
     * Determines whether the specified node is child of the given parent element.
     * @param parent Parent element.
     * @param node Child node.
     * @returns Returns true when the specified node is child of the given parent, false otherwise.
     */
    static childOf(parent: HTMLElement | ShadowRoot, node: Node): boolean;
}
