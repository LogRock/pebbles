module.exports = {
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "standard", "prettier", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-console": "error"
  },
  ignorePatterns: ["dist/", "node_modules/"]
};