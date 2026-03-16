import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'max-len': [
        'error',
        {
          code: 120,
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
        },
      ],
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'consistent-return': 'off',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      'no-shadow': 'off',
      'no-debugger': 'error',
      'no-unused-vars': 'off',

      'no-use-before-define': 'off',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state', 'self'],
        },
      ],
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-props-no-spreading': [
        0,
        {
          html: 'ignore',
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: [
            '**/tsconfig.json',
            '**/tsconfig.app.json',
            '**/tsconfig.node.json',
          ],
        },
      },
    },
  },
  ...storybook.configs['flat/recommended'],
]);
