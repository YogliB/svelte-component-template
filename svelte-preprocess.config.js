/**
 * @type {import('svelte-preprocess/dist/index')}
 */
module.exports = {
	babel: true,
	postcss: {
		plugins: [require('autoprefixer')],
	},
};
