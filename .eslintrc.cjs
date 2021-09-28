module.exports = {
	env: {
		browser: true,
		'cypress/globals': true,
		es2017: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			extends: ['plugin:@typescript-eslint/recommended'],
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
		{
			extends: ['plugin:cypress/recommended'],
			files: ['./cypress/plugins/index.js', '*.spec.*'],
		},
		{
			extends: ['plugin:@typescript-eslint/recommended'],
			files: ['*.ts'],
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	plugins: ['svelte3', '@typescript-eslint', 'cypress'],
	root: true,
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
};
