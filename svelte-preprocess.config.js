/**
 * @type {import('svelte-preprocess/dist/index')}
 */
export const sveltePreprocessConfig = {
	babel: true,
	postcss: {
		plugins: [require('autoprefixer')],
	},
};
