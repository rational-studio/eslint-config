module.exports = {
  configs: {
    recommended: {
      parser: '@typescript-eslint/parser',
      env: {
        browser: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:monorepo/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'monorepo',
        'import',
      ],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
          { additionalHooks: 'usePromiseCallback' },
          'warn',
        ],
        'react/prop-types': 'off',

        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
        // Temporarily disabled since "as const" is not allowed atm
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        'react/display-name': 'off',
      },
      settings: {
        react: {
          version: '16.8',
        },
      },
    },
  },
};
