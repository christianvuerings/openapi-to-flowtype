/* eslint-env node */
module.exports = {
  extends: "eslint:recommended",
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
};
