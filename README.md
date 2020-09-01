_Psst — looking for an app template? Go here --> [sveltejs/sapper-template](https://github.com/sveltejs/sapper-template)_

---

# Svelte 3 Component Template

## Getting Started

1. Clone this template with [degit](https://github.com/Rich-Harris/degit):

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

1. Edit a component file in `packages/my-component`, and save it.

1. Make sure your component is exported in `packages/my-component/index.js`.

1. Make sure your component is imported and nested in `src/App.svelte`, so you can preview and test it.

1. Navigate to [localhost:5000](http://localhost:5000) to see your components live.

## Consuming Components

TODO

## Testing

This template uses [Cypress](https://www.cypress.io/) & [testing-library](https://testing-library.com/docs/cypress-testing-library/intro) for testing.

It is highly recommended going through their docs if you intend on testing your components.

You can witness a simple example by running `npm run cy:open`.
