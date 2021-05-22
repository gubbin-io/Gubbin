# Gubbin

Projects, Simplified.

## Conventions

**1. Enable prettier on VSCode**

Do not remove `.vscode` from repository, and always open `Gubbin` as a project instead of `client` or `server`.\
Install the [prettier VSCode extension](https://prettier.io/docs/en/editors.html).
Install [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode).

**2. Use `yarn` instead of `npm`**

for example:

```
yarn add @types/cors
```

instead of:

```
npm install @types/cors
```

**3. Use ES6 `import` instead of commonjs `require`**

for example:

```
import app from "./app";

export default app;
```

instead of:

```
const app = require("./app");

module.exports = app;
```

## Instructions

To run the application locally, first you need to clone the repository and install the dependencies.

```
# clone the repository
git clone https://github.com/gubbin-io/Gubbin.git
cd Gubbin/

# install dependencies for the backend
cd server && yarn install
cd ../

# install dependencies for the frontend
cd client && yarn install
cd ../
```

After the setup, you can start the app by:

```
cd client && yarn dev
```

See `server` and `client` for more instructions.
