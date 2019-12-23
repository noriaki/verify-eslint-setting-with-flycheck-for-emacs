/*
 * Usage:
 *
 *  $ yarn add --dev typescript // to avoid errors in `npx eslint --init`
 *  $ npx eslint --init         // select options and npm install (airbnb, ts)
 *  $ yarn add --dev eslint-config-airbnb-typescript // decorate airbnb with ts
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
    // jest: true, // included in 'plugin:jest/recommended'
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
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // https://github.com/iamturns/eslint-config-airbnb-typescript#i-wish-this-config-would-support-
    'airbnb-typescript',
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-configairbnbhooks
    'airbnb/hooks',
    // https://github.com/jest-community/eslint-plugin-jest#recommended
    'plugin:jest/recommended',
    'plugin:jest/style',
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  /*
  plugins: [
    '@typescript-eslint', // included in 'plugin:@typescript-eslint/recommended'
    'react-hooks',        // included in 'airbnb/hooks'
    'jest',               // included in 'plugin:jest/recommended'
    'prettier',           // included in 'plugin:prettier/recommended'
  ],
  */
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
