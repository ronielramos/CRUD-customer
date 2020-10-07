module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: 12,
    babelOptions: {
      configFile: "./babel.config.js",
    }
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': 'off'
  },
};
