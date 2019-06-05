# This is the DEVELOPMENT branch - user discretion is adviced!

## This template is based on the official [component-template](https://github.com/sveltejs/component-template) and [app-template](https://github.com/sveltejs/template) with help from [this](https://github.com/sveltejs/component-template/pull/5) PR

_Psst — looking for an app template? Go here --> [sveltejs/template](https://github.com/sveltejs/template)_

---

# Svelte 3 Component Template

A base for building shareable Svelte components. Clone it with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit YogliB/svelte-component-template my-new-component
cd my-new-component
npm install # or yarn
```

Your component's source code lives in `src/index.svelte`.

## Setting up

- Run `npm init`
- Replace this README with your own

## Get started

Install the dependencies...

```bash
cd my-new-component
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.html`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`index.mjs`) and a UMD script (`index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

## Publishing to [npm](https://www.npmjs.com)

- [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
