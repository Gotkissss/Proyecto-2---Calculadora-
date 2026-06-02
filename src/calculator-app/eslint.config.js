// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [js.configs.recommended, {
  files: ['**/*.{js,jsx,ts,tsx}'],
  ignores: ['node_modules/**', 'dist/**', '.storybook/**'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'eol-last': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'no-semi': 'error',
    'max-len': ['error', { code: 120 }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}, ...storybook.configs["flat/recommended"]];