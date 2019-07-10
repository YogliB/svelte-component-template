<svelte:options accessors={ true } />

<script>
  export let name = 'stranger!';
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}</h1>
