module.exports = {
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'svelte-jest',
	},
	moduleFileExtensions: ['js', 'json', 'svelte'],
	bail: false,
	verbose: true,
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
