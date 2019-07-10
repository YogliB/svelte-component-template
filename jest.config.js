module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte',
  },
  moduleFileExtensions: ['js', 'svelte'],
  bail: false,
  verbose: false,
  setupFilesAfterEnv: [
    '@testing-library/svelte/cleanup-after-each',
    'jest-dom/extend-expect',
  ],
};
