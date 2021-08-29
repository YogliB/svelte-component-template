<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import First from './First.svelte';
</script>

<Meta
	title="Components/First"
	component={First}
	argTypes={{
		name: { control: 'text' },
		textColor: { control: 'text' },
	}}
/>

<!-- Template -->
<Template let:args>
	<First {...args} />
</Template>

<!-- Stories -->
<Story
	name="Jane"
	args={{
		name: 'Jane',
		textColor: 'lightblue',
	}}
/>

<Story
	name="John"
	args={{
		name: 'John',
		textColor: 'indianred',
	}}
/>

<Story
	name="Jina"
	args={{
		name: 'Jina',
		textColor: 'darkgray',
	}}
/>
