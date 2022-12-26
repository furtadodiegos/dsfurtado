module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb-typescript-prettier',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin', 'simple-import-sort', 'cypress', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  env: {
    'cypress/globals': true,
  },
  rules: {
    'import/no-named-default': 'off',
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': 'off',
    'import/no-unresolved': 'error',
    'global-require': 'off',
    camelcase: 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w', '^@?\\w.*\\u0000$'],
          ['(?<!\\u0000)$', '(?<=\\u0000)$'],
          ['^\\.', '^\\..*\\u0000$'],
        ],
      },
    ],
  },
};
