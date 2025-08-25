import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: [
      'node_modules/',
      '.expo/',
      'dist/',
      '.expo-shared/',
      '*.log',
      '.DS_Store',
      '*.tgz',
      '*.tar.gz',
      '.vscode/',
      '.idea/',
      'android/',
      'ios/',
      'web-build/',
      '.git/',
      'coverage/',
      '__tests__/',
      '*.config.js',
      'metro.config.js',
      'babel.config.js',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        __DEV__: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-native': reactNative,
      'react-hooks': reactHooks,
    },
    rules: {
      // Regras de indentação
      'indent': ['error', 2, {
        'SwitchCase': 1,
        'VariableDeclarator': 1,
        'outerIIFEBody': 1,
        'FunctionDeclaration': {
          'parameters': 1,
          'body': 1,
        },
        'FunctionExpression': {
          'parameters': 1,
          'body': 1,
        },
        'CallExpression': {
          'arguments': 1,
        },
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'ImportDeclaration': 1,
        'flatTernaryExpressions': false,
        'ignoreComments': false,
      }],

      // Outras regras de formatação
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],

      // Regras específicas do React
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'off', // React 17+
      'react/react-in-jsx-scope': 'off', // React 17+
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Regras específicas do React Native
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn',

      // Regras do TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Desabilitar regras conflitantes
      'no-undef': 'off', // TypeScript cuida disso
      'no-unused-vars': 'off', // Usar a versão do TypeScript
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
