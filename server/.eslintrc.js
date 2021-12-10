module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['.eslintrc.js', './build'],
  rules: {
    'object-shorthand': 0,
  },
  'max-classes-per-file': ['error', { ignoreExpressions: true }],
};
