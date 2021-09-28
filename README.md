# Svelte 3 Component Template

## A highly-opinionated base for building shareable Svelte 3 components

[![](https://github.com/YogliB/svelte-component-template/workflows/Node%20CI/badge.svg)](https://github.com/YogliB/svelte-component-template/actions?query=workflow%3A%22Node+CI%22)
[![Known Vulnerabilities](https://snyk.io/test/github/YogliB/svelte-component-template/badge.svg)](https://snyk.io/test/github/YogliB/svelte-component-template)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## Table of Contents

1. [Features](#features)
1. [Getting started](#getting-started)
1. [Developing](#developing)
1. [Preprocessors](#preprocessors)
1. [Testing](#testing)
1. [Publishing to npm](#publishing-to-npm)
1. [Frequently Asked Questions](#frequently-asked-questions)
1. [Credits & Inspiration](#credits-&-inspiration)

## Features

-   [Preprocessing](https://github.com/sveltejs/svelte-preprocess/blob/main/README.md)
-   [Formating](https://github.com/sveltejs/prettier-plugin-svelte)
-   [Linting](https://github.com/sveltejs/eslint-plugin-svelte3)
-   [Storybook](https://storybook.js.org/docs/svelte/get-started/introduction)
-   [Testing](https://storybook.js.org/docs/svelte/workflows/testing-with-storybook) // WIP

## Getting Started

1. Clone the template:

Option #1: Clone it with Github's "Use this template" option:

[![image](https://user-images.githubusercontent.com/10498929/131304421-07a7f57c-4faa-4900-9a09-f7a1067e886c.png)](https://github.com/YogliB/svelte-component-template/generate)

Option #2: Clone this repository with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit YogliB/svelte-component-template `my-new-component`
```

2. Enter the folder:

```bash
cd my-new-component
```

2. Initiate [Git](https://git-scm.com/):

```bash
git init
```

3. Install dependencies:

```bash
npm install
```

3. Configure `package.json`:

```bash
npm init
```

4. Start coding:

```bash
code .
```

-   Your component's source code lives in `src/lib/[MyComponent]/[MyComponent].svelte`.

## Developing

1. Start [SvelteKit](https://kit.svelte.dev/):

```bash
npm run dev
```

2. Edit a component file in `src/lib`, save it and watch the magic happens.

3. Export your components in `src/lib/index.js`.

4. Import your components in `src/routes/index.svelte` from `$lib$, so you can preview and test it.

5. Navigate to [localhost:3000](http://localhost:3000) to see your components live.

## Preprocessors

All preprocessing is handled with [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess).
Configure it in [`svelte.config.js`](https://kit.svelte.dev/docs#configuration).

## Testing

### Interaction testing

This is a simple and intuitive method that can be done through Storybook, with the help of [Cypress](https://cypress.io).
And example and pre-made test scripts can be found in this repository, and more info can be found in [Storybook's docs](https://storybook.js.org/docs/svelte/workflows/interaction-testing).

### Snapshot testing

In this repo you'll find a [basic workflow](.github/chromatic.yml) that uses [Chromatic](https://www.chromatic.com/) for snapshot testing.

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

1. Prepare the package for publishing:

```bash
npm run package
```

2. Publish the package:

```bash
cd package
npm run publish
```

-   [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
-   [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
