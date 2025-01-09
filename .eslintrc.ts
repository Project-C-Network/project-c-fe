module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  rules: {
    'no-warning-comments': ['error', { terms: [], location: 'anywhere' }],
    'no-loops/no-loops': 2,
    'no-console': 'error',
    'prettier/prettier': 2,
  },
  plugins: ['no-comments', '@typescript-eslint', 'no-loops', 'prettier'],
};
