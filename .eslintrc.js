module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["preact", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-console": "error",
  },
  ignorePatterns: ["dist/", "node_modules/"],
};
