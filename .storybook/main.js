const preprocess = require('svelte-preprocess');

module.exports = {
	stories: [
		'./**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf',
	],
	svelteOptions: {
		preprocess: preprocess(),
	},
};
