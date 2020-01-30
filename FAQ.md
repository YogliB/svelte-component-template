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

## How do I include 3'rd party css in my components?

There are a few options to do this:
1. Don't include 3'rd party css and just tell your users to do that.
2. Include it via a cdn, like so:
```css
@import url('https://unpkg.com/@fullcalendar/core/main.css');
```

3. Use [PostCSS](https://github.com/egoist/rollup-plugin-postcss#readme) and SCSS ([here's](https://github.com/YogliB/svelte-fullcalendar/tree/master/examples/svelte) an example).
