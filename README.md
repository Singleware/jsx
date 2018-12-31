# JSX

This package provides some classes to help you create JSX statements in a easy way.

## Configuration

Add the specified lines below into your tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "JSX.create"
  }
}
```

## Usage

```tsx
import * as JSX from '@singleware/jsx';

const block = (
  <div>
    <span>Some test with a</span>
    <a href="/test">test link.</a>
  </div>
);
```

> You can use with node.js or browser.

## Install

Using npm:

```sh
npm i @singleware/jsx
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
