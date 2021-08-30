module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['svelte3', '@typescript-eslint', 'jest', 'cypress'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{
			files: ['*.test.*'],
			extends: ['plugin:jest/recommended', 'plugin:jest/style'],
		},
		{
			files: ['./cypress/plugins/index.js', '*.spec.*'],
			extends: ['plugin:cypress/recommended'],
		},
	],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
		'jest/globals': true,
		'cypress/globals': true,
	},
};
