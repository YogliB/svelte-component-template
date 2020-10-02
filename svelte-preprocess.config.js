/**
 * @type {import('svelte-preprocess/dist/index')}
 */
module.exports.sveltePreprocessConfig = {
	babel: true,
	postcss: {
		plugins: [require('autoprefixer')],
	},
};
