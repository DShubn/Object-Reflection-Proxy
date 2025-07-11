module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        jest: true,
      },
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
];