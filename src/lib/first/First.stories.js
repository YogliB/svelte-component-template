import First from './First.svelte';

export default {
	title: 'Components/First',
	component: First,
	argTypes: {
		name: { control: 'text' },
		textColor: { control: 'color' },
	},
};

const Template = (props) => ({
	Component: First,
	props,
});

export const Jane = Template.bind({});
Jane.args = {
	primary: true,
	name: 'Jane',
	textColor: 'lightblue',
};

export const John = Template.bind({});
John.args = {
	primary: true,
	name: 'John',
	textColor: 'indianred',
};

export const Jina = Template.bind({});
Jina.args = {
	primary: true,
	name: 'Jina',
	textColor: 'darkgray',
};
