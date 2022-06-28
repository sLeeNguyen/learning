module.exports = {
  root: true,
  extends: ['@react-native-community'],
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping. Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'error',
    'import/no-unresolved': 'warn',
    'react/self-closing-comp': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-console': ['warn', { allow: ['debug', 'warn', 'error'] }],
    'react-native/no-inline-styles': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        paths: ['.', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
