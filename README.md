# Gubbin
Projects, Simplified. 

## Conventions

#### use `yarn` instead of `npm`

for example: 

```
yarn add @types/cors
```

instead of: 

```
npm install @types/cors
```

#### use ES6 `import` instead of commonjs `require`
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
