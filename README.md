_Psst — looking for an app template? Go here --> [sveltejs/sapper-template](https://github.com/sveltejs/sapper-template)_

---

# Svelte 3 Component Template

## Getting Started

1. Clone it with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit YogliB/svelte-component-template my-new-component
```

2. `cd` into the folder and install the `node_modules`:

```bash
cd my-new-component
git init
npm ci
```

-   The `ci` command makes sure your packages match the one in the `package-lock.json` (See [here](https://docs.npmjs.com/cli/ci.html)).

3. Run `npm init`, to configure the project.

Your component's source code lives in `src/components/[MyComponent].svelte`.

## Developing

1. Start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

2. Edit a component file in `src/components`, save it, and reload the page to see your changes.

3. Make sure your component is exported in `src/components/components.module.js`.

4. Make sure your component is imported and nested in `src/App.svelte`, so you can preview and test it.

5. Navigate to [localhost:5000](http://localhost:5000) to see your components live.

## Consuming Components

TODO

## Testing

This template uses [Cypress](https://www.cypress.io/) & [testing-library](https://testing-library.com/docs/cypress-testing-library/intro) for testing.

It is highly recommended going through their docs if you intend on testing your components.

You can witness a simple example by running `npm run cy:open`.
