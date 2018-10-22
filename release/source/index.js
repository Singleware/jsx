"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helper = require(`./helpers/${typeof window !== 'undefined' ? 'browser' : 'text'}`).Helper;
// Aliases
exports.create = Helper.create;
exports.append = Helper.append;
exports.clear = Helper.clear;
exports.childOf = Helper.childOf;
