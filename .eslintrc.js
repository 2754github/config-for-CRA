module.exports = {
  env: {
    browser: true,
    node: true, // +
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks', // +
    'plugin:import/errors', // +
    'plugin:import/warnings', // +
    'plugin:import/typescript', // +
    'plugin:@typescript-eslint/eslint-recommended', // +
    'plugin:@typescript-eslint/recommended', // +
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // +
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json', // +
    // ecmaVersion: 2018,
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname, // +
  },
  root: true, // +
  plugins: [
    '@typescript-eslint',
    'import', // +
    'jsx-a11y', // +
    'react',
    'react-hooks', // +
    'prefer-arrow', // +
  ],
  // 各種ルールを追加/上書き
  rules: {
    camelcase: 'warn',
    'implicit-arrow-linebreak': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-console': 'off',
    'no-self-assign': 'warn',
    'no-void': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    // ↓ emotionを使う場合はoffにするしかない？
    'no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    // 関数定義はアロー関数式以外許さない
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      { disallowPrototype: true, singleReturnOnly: false, classPropertiesAllowed: false },
    ],
  },
  overrides: [{ files: ['*.tsx'], rules: { 'react/prop-types': 'off' } }],
  settings: { 'import/resolver': { node: { paths: ['src'] } } },
};
