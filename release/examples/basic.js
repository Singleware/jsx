"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const JSX = require("../source");
const link = (JSX.create("a", { href: "/test", style: "font-family: 'Open sans';" }, "Test link."));
const div = JSX.create("div", null, link);
console.log(div);
