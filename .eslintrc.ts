module.exports = {
    root: true,
    extends: ['next', 'next/core-web-vitals'],
    rules: {
      'no-console': [
        'warn',
        { allow: ['warn', 'error'] }
      ],
      'no-warning-comments': [
        'warn',
        { terms: ['todo', 'fixme'], location: 'anywhere' }
      ],
      'spaced-comment': ['error', 'always'],
    },
  };
  