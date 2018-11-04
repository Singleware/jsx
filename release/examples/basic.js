"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the JSX package to generate the
 * dynamic HTML.
 */
const JSX = require("../source");
const link = JSX.create("a", { href: "/test" }, "Test link.");
const div = JSX.create("div", null, link);
console.log(div);
