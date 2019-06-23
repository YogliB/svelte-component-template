_Psst — looking for an app template? Go here --> [sveltejs/template](https://github.com/sveltejs/template)_

---

# Svelte 3 Component Template

[![Known Vulnerabilities](https://snyk.io/test/github/YogliB/svelte-component-template/badge.svg)](https://snyk.io/test/github/YogliB/svelte-component-template)

## Table of Contents

1. [Getting started](#getting-started)
2. [Developing](#developing)
3. [Consuming components](#consuming-components)
4. [Backward Compatibility](#backward-compatibility)
5. [Preprocessors](#preprocessors)
6. [Publishing to npm](publishing-to-npm)
7. [Credits & Inspiration](#credits-&-inspiration)

## Getting Started

1. Clone it with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit YogliB/svelte-component-template my-new-component
```

2. `cd` into the folder and install the `node_modules`:

```bash
cd my-new-component
npm ci
```

- The `ci` command makes sure your packages match the one in the `package-lock.json` (See [here](https://docs.npmjs.com/cli/ci.html)).

3. Run `npm init`, to configure the project.
4. Replace this `README` with your own.

Your component's source code lives in `src/components/[MyComponent].svelte`.

## Developing

1. Start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

2. Edit a component file in `src/components`, save it, and reload the page to see your changes.

3. Make sure your component is exported in `src/components/components.module.js`.

4. Make sure your component is imported and nested in `src/App.svelte`.

5. Navigate to [localhost:5000](http://localhost:5000) to see your components live.

## Consuming Components

Your package.json has a `"svelte"` field pointing to `src/components/components.module.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`index.mjs`) and a UMD script (`index.js`), in the `dist` folder.<br>
This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

## Backward Compatibility

This template uses [svelte-preprocess](https://github.com/kaisermann/svelte-preprocess) in order to integrate [PostCSS](https://postcss.org) auto-prefixing capabilities into the build process.

### Browserlist

`PostCSS` uses [browserlist](https://github.com/browserslist/browserslist) under the hood, in order to "know" what css to prefix.

The `browserlist` configuration is located inside the `package.json`.

## Preprocessors

This template comes with the [svelte-preprocess](https://github.com/kaisermann/svelte-preprocess) by default, which simplifies the use of preprocessors in components.

### Usage

1. [Install the required preprocessors.](https://github.com/kaisermann/svelte-preprocess#installation)
2. [Enable the preprocessor in the component.](https://github.com/kaisermann/svelte-preprocess#preprocessors-support)

## Publishing to [npm](https://www.npmjs.com)

- [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)

## Contributing

All contributions are welcome! 😊

Just make sure you read [this](https://github.com/YogliB/svelte-component-template/blob/master/CONTRIBUTING.md) before contributing.

## Credits & Inspiration

- Official [component-template](https://github.com/sveltejs/component-template) by @Rich-Harris
- Official [app-template](https://github.com/sveltejs/template) by @Rich-Harris
- [This](https://github.com/sveltejs/component-template/pull/5) PR by @sisou
