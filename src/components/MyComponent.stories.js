import MyComponent from './MyComponent.svelte';

export default {
	title: 'Example/MyComponent',
	component: MyComponent,
	argTypes: {
		name: { control: 'text' },
		textColor: { control: 'color' },
	},
};

const Template = ({ ...args }) => ({
	Component: MyComponent,
	props: args,
});

export const Default = Template.bind({});
Default.args = {};
