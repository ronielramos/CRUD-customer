module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    mocha: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    camelcase: 'off',
    'max-len': ['warn', { code: 100 }],
    'max-lines': ['warn', 200],
    'no-console': 'warn',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    'sort-keys': 'warn'
  }
}
