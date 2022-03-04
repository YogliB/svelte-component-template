<script lang="ts">
	export let name = 'World';
	export let textColor = '#ff3e00';

	function reset() {
		name = 'World';
		textColor = '#ff3e00';
	}
</script>

<h1 style="color: {textColor}" on:dblclick={reset}>Hello {name}!</h1>

<style>
	h1 {
		margin: auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 5rem;
		font-weight: lighter;
		text-align: center;
	}
</style>
