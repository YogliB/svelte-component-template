_Looking for a simple component template? Click [here](https://github.com/sveltejs/component-template)._

---

# Svelte 3 Component Template

## Prerequisites

- Node.js v10+

## Getting Started

1. Clone this template:

```bash
npx degit YogliB/svelte-component-template component-library
```

1. `cd` into the folder and install the `node_modules`:

```bash
cd my-new-component
git init // required for pre-commit hooks
npm i
```

1. Run `npm init`, to configure the project.

Your components source code lives in `packages/*`.

## Developing

1. Bootstrap [lerna](https://github.com/lerna/lerna):

```bash
npm run bootstrap
```

1. Run the example project:

```bash
npm run dev
```

1. Navigate to [localhost:5000](http://localhost:5000).

1. Edit a component file in `.svelte` `packages/my-component`, and save it.

1. What the magic happens.

## Consuming Components

Your [package.json](https://github.com/YogliB/svelte-component-template/blob/v2/packages/my-component/package.json) has a "svelte" field pointing to an index.js file, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like rollup-plugin-svelte or svelte-loader (where resolve.mainFields in your webpack config includes "svelte").

## Testing

This template uses [Cypress](https://www.cypress.io/) & [testing-library](https://testing-library.com/docs/cypress-testing-library/intro) for testing.

It is highly recommended going through their docs if you intend on testing your components.

You can witness a simple example by running `npm run cy:open`.

## A few recommendations

- Type your props and use [jsdoc](https://devhints.io/jsdoc) to do so (AKA let your users know how to use your components but don't force them to use Typescript).
- Give your users the ability to install _only_ the packages they need (hence the monorepo).
- Minimize the use of `dependencies` in favor of `peerDependencies`.
Using `dependencies` may cause duplicates with different versions in `node_modules` and cause issues. 
