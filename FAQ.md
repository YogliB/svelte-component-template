# Frequently Asked Questions

## What's the `compnents.module.js` file for (in the regular template)?

It's for [Rollup](rollupjs.org) to recognize all the components it needs to build and for Svelte to be able to import multiple components from a single source.

For instance, tt lets the uset do:
```javascript
import { MyComponent, MyOtherComponent } from 'my-component-library'
```

Instead of:
```javascript
import MyComponent from 'my-component-library/components/MyComponent.svelte'
import MyOtherComponent from 'my-component-library/components/MyOtherComponent'
```
