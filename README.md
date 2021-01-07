# Svelte 3 Component Template

[![](https://github.com/YogliB/svelte-component-template/workflows/Node%20CI/badge.svg)](https://github.com/YogliB/svelte-component-template/actions?query=workflow%3A%22Node+CI%22)
[![Known Vulnerabilities](https://snyk.io/test/github/YogliB/svelte-component-template/badge.svg)](https://snyk.io/test/github/YogliB/svelte-component-template)
[![](https://badgen.net/dependabot/YogliB/svelte-component-template/?icon=dependabot)](https://dependabot.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## Table of Contents

1. [Features](#features)
1. [Getting started](#getting-started)
1. [Developing](#developing)
1. [Consuming components](#consuming-components)
1. [Backward Compatibility](#backward-compatibility)
1. [Preprocessors](#preprocessors)
1. [Testing](#testing)
1. [Publishing to npm](#publishing-to-npm)
1. [Frequently Asked Questions](#frequently-asked-questions)
1. [Credits & Inspiration](#credits-&-inspiration)

## Features

-   Autoprefixing CSS
-   Preprocessing
-   Formating
-   Linting
-   Testing
-   [Storybook](https://www.learnstorybook.com/intro-to-storybook/svelte/en/get-started/)

## Getting Started

1. Choose your template (regular/monorepo)

1. Clone it with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit YogliB/svelte-component-template my-new-component
or
npx degit "YogliB/svelte-component-template#monorepo" my-new-component
```

3. `cd` into the folder and install the `node_modules`:

```bash
cd my-new-component
git init
npm i
```

4. Run `npm init`, to configure the project.

Your component's source code lives in `src/components/[MyComponent].svelte`.

## Developing

1. Start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

2. Edit a component file in `src/components`, save it and watch the magic happens.

3. Make sure your component is exported in `src/components/index.js`.

4. Make sure your component is imported and nested in `src/App.svelte`, so you can preview and test it.

5. Navigate to [localhost:5000](http://localhost:5000) to see your components live.

## Consuming Components

Your package.json has a `"svelte"` field pointing to `src/components/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`).

## Backward Compatibility

This template uses [svelte-preprocess](https://github.com/kaisermann/svelte-preprocess) in order to integrate [PostCSS](https://postcss.org) auto-prefixing capabilities & [Babel](https://babeljs.io/)'s transpiling capabilities into the build process.

### Browserlist

`PostCSS` uses [browserlist](https://github.com/browserslist/browserslist) under the hood, in order to "know" what css to prefix.

The `browserlist` configuration is located inside the `package.json`.

## Preprocessors

This template comes with the [svelte-preprocess](https://github.com/kaisermann/svelte-preprocess) by default, which simplifies the use of preprocessors in components.

### Usage

[Getting Started](https://github.com/sveltejs/svelte-preprocess/blob/master/docs/getting-started.md) with svelte-preprocess.

-   To configure svelte-preprocess use the `sveltePreprocessConfig` variable in `./preprocess.js`

## Testing

This template uses [Cypress](https://www.cypress.io/) & [testing-library](https://testing-library.com/docs/cypress-testing-library/intro) for testing.

It is highly recommended going through their docs if you intend on testing your components.

You can witness a simple example by running `npm run cy:open`.

## Frequently Asked Questions

### What's the `index.js` file for?

It's for Svelte to be able to import multiple components from a single source.

For instance, it lets the user do:

```javascript
import { MyComponent, MyOtherComponent } from 'my-component-library';
```

Instead of:

```javascript
import MyComponent from 'my-component-library/components/MyComponent.svelte';
import MyOtherComponent from 'my-component-library/components/MyOtherComponent';
```

### How do I include 3'rd party css in my components?

There are a few options to do this:

1. Don't include 3'rd party css and just tell your users to do that (Probably using PostCSS).
2. Include it via a cdn, like so:

```css
@import url('https://unpkg.com/@scope/package/main.min.css');
```

## Publishing to [npm](https://www.npmjs.com)

-   [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
-   [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)

## Credits & Inspiration

-   Official [component-template](https://github.com/sveltejs/component-template) by @Rich-Harris
-   Official [app-template](https://github.com/sveltejs/template) by @Rich-Harris
-   [This](https://github.com/sveltejs/component-template/pull/5) PR by @sisou
-   [This](https://github.com/sveltejs/component-template/pull/31) PR by @BlackFenix2
