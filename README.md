# Gubbin

Discover and engage with clubs and societies that interest you.

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

**4. Do not use `var` when declaring a variable, use `const` and `let`.**


**5. Use the Angular commit convention when writing commit messages.**

The Angular commit convention is specified [here](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

Use [git cz](https://github.com/commitizen/cz-cli) to automate the enforcement of the commit convention. 
To install `git cz` gloabally on your computer, run
```
yarn global add cz-conventional-changelog && echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```
After installing `git cz`, you can replace every use of `git commit` by `git cz` or `git-cz`.

If you are using VS Code, you can install the [vscode-commitizen](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen) to commit by the Angular convention in VS Code.

You can use [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) or [standard-version](https://github.com/conventional-changelog/standard-version) to automate change log generation of Angular commit messages.

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
