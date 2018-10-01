/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Component } from './component';
export { Properties } from './properties';

import { Helper } from './helper';

// Aliases
export const create = Helper.create;
export const append = Helper.append;
export const clear = Helper.clear;
export const isChildOf = Helper.isChildOf;
