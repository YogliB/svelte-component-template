<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import First from './First.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Components/First"
	component={First}
	argTypes={{
		name: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<First {...args} />
</Template>

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
