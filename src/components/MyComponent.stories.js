import MyComponent from './MyComponent.svelte';

export default {
	title: 'Example/MyComponent',
	component: MyComponent,
	argTypes: {
		name: { control: 'text' },
	},
};

const Template = ({ ...args }) => ({
	Component: MyComponent,
	props: args,
});

export const World = Template.bind({});
World.args = {
	name: 'World',
};
