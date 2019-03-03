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
 * Provides any common methods to help with Browser and Text DOM.
 */
let Common = class Common extends Class.Null {
    /**
     * Escape any special HTML character in the given input string.
     * @param input Input string.
     * @returns Returns the escaped input string.
     */
    static escape(input) {
        return input.replace(/\"|\'|\<|\>|\&/gi, (match) => {
            switch (match) {
                case '"':
                    return '&quot;';
                case "'":
                    return '&39;';
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '&':
                    return '&amp;';
            }
            return match;
        });
    }
};
__decorate([
    Class.Public()
], Common, "escape", null);
Common = __decorate([
    Class.Describe()
], Common);
exports.Common = Common;
