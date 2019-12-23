/*
 * Usage:
 *
 *  $ yarn add --dev typescript // to avoid errors in `npx eslint --init`
 *  $ npx eslint --init         // select options and npm install
 *  $ rm package-lock.json      // to not using npm
 *  $ yarn install              // to generate yarn.lock
 *  $ yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
 *  $ touch .eslintrc.js        // and edit (this file)
 *  $ touch prettier.config.js  // and edit
 *
 */

const allowExtensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    'import/extensions': allowExtensions,
    'import/resolver': {
      node: { extensions: allowExtensions },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_' },
    ],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: allowExtensions },
    ],
    'import/extensions': [
      'error',
      'always',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
  },
};
