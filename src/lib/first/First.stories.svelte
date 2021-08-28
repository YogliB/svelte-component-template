<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import First from './First.svelte';
</script>

<Meta title="First" component={First} />

<Story name="Primary">
	<First name="Lucy" textColor="indianred" />
</Story>
