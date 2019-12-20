module.exports = {
  env : {
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    strict: 'off',
    'no-throw-literal': 'warn',
    quotes: ['warn', 'single'],
    'react/no-multi-comp': 'warn',
    'react/prop-types': 'warn',
    'react/display-name': 'warn',
    'react/self-closing-comp': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'warn'
  }
};
