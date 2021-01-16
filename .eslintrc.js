/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "prettier/flowtype",
  ],
  plugins: ["flowtype"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "flowtype/no-mutable-array": "error",
  },
};
