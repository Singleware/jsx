/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as JSX from '../source';

const link = (
  <a href="/test" style="font-family: 'Open sans';">
    Test link.
  </a>
);
const div = <div>{link}</div>;

console.log(div);
