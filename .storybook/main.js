module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	/**
	 * @param {import('webpack/index').Configuration} config
	 */
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		const loaderIndex = config.module.rules.findIndex(
			(val) => val.loader && val.loader.includes('svelte-loader')
		);
		config.module.rules[loaderIndex].options = {
			preprocess: require('svelte-preprocess')(
				require('../svelte-preprocess.config').sveltePreprocessConfig
			),
		};

		// Return the altered config
		return config;
	},
};
