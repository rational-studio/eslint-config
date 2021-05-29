module.exports = {
  configs: {
    recommended: {
      parser: '@typescript-eslint/parser',
      env: {
        'jest/globals': true,
        browser: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jest/recommended',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        process: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': true,
            'ts-expect-error': false,
          },
        ],
        'react/display-name': 'off',
      },
      settings: {
        react: {
          version: '16.13',
        },
      },
    },
  },
};
