# Gubbin

Projects, Simplified.

## Conventions

#### 1. Enable prettier on VSCode

**DO NOT remove .vscode from repository**

Install the [prettier VSCode extension](https://prettier.io/docs/en/editors.html).

#### 2. Use `yarn` instead of `npm`

for example:

```
yarn add @types/cors
```

instead of:

```
npm install @types/cors
```

#### 3. Use ES6 `import` instead of commonjs `require`

for example:

```
export default app;

...

import app from "./app";
```

instead of:

```
module.exports = app;

...

const app = require("./app");
```
