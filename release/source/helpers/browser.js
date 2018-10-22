"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Provides methods to help with Browser DOM.
 */
let Helper = class Helper {
    /**
     * Creates an element with the specified type.
     * @param type Component type or native element tag name.
     * @param properties Element properties.
     * @param children Element children.
     * @throws Throws a type error when the element or component type is unsupported.
     */
    static create(type, properties, ...children) {
        if (type instanceof Function) {
            return new type(properties, children).element;
        }
        else if (typeof type === 'string') {
            return this.createFromElement(type, properties, ...children);
        }
        else {
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
    static append(parent, ...children) {
        for (const child of children) {
            if (child instanceof Node) {
                parent.appendChild(child);
            }
            else if (child instanceof NodeList || child instanceof Array) {
                this.append(parent, ...child);
            }
            else if (typeof child === 'string' || typeof child === 'number') {
                this.renderer.innerHTML = child;
                this.append(parent, ...this.renderer.childNodes);
            }
            else if (child) {
                const node = child.element;
                if (node instanceof Node) {
                    this.append(parent, node);
                }
                else {
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
    static clear(element) {
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
    static childOf(parent, node) {
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
    static assignProperties(element, properties) {
        for (const property in properties) {
            if (properties[property] === void 0) {
                continue;
            }
            if (property in element) {
                element[property] = properties[property];
            }
            else {
                const event = property.toLowerCase();
                if (this.eventMap.includes(event)) {
                    element.addEventListener(event.substr(2), properties[property]);
                }
                else {
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
    static createFromElement(type, properties, ...children) {
        const element = document.createElement(type);
        if (properties) {
            this.assignProperties(element, properties);
        }
        return this.append(element, ...children);
    }
};
/**
 * Known events to automate listeners.
 */
Helper.eventMap = [
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
];
/**
 * Renderer for temporary elements.
 */
Helper.renderer = document.createElement('body');
__decorate([
    Class.Private()
], Helper, "eventMap", void 0);
__decorate([
    Class.Private()
], Helper, "renderer", void 0);
__decorate([
    Class.Public()
], Helper, "create", null);
__decorate([
    Class.Public()
], Helper, "append", null);
__decorate([
    Class.Public()
], Helper, "clear", null);
__decorate([
    Class.Public()
], Helper, "childOf", null);
__decorate([
    Class.Private()
], Helper, "assignProperties", null);
__decorate([
    Class.Private()
], Helper, "createFromElement", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
