import { Component } from './component';
import { Properties } from './properties';
/**
 * Provides methods to help DOM.
 */
export declare class Helper {
    /**
     * Known events to automate listeners.
     */
    private static eventMap;
    /**
     * Renderer for temporary elements.
     */
    private static renderer;
    /**
     * Creates an element with the specified type.
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
    static append(element: HTMLElement | ShadowRoot, ...children: any[]): HTMLElement | ShadowRoot;
    /**
     * Clear all children of the specified element.
     * @param element Element instance.
     * @returns Returns the cleared element instance.
     */
    static clear(element: HTMLElement): HTMLElement;
    /**
     * Determines whether the specified node is a child of the given parent element.
     * @param node Child node.
     * @param parent Parent element.
     * @returns Returns true when the specified node is child of the given parent, false otherwise.
     */
    static isChildOf(node: Node, parent: HTMLElement): boolean;
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
     * @param children Element children list.
     * @returns Returns the element instance.
     */
    private static createFromElement;
}
