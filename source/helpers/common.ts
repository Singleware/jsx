/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

/**
 * Provides any common methods to help with Browser and Text DOM.
 */
@Class.Describe()
export class Common extends Class.Null {
  /**
   * Escape any special HTML character in the given input string.
   * @param input Input string.
   * @returns Returns the escaped input string.
   */
  @Class.Public()
  public static escape(input: string): string {
    return input.replace(
      /\"|\'|\<|\>|\&/gi,
      (match: string): string => {
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
      }
    );
  }
}
