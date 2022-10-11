/* eslint-disable @typescript-eslint/no-var-requires */
const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate");

module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-order"],
  customSyntax: "@stylelint/postcss-css-in-js",
  rules: {
    "order/properties-order": [
      sortOrderSmacss({ noEmptyLineBetween: true, emptyLineBefore: "always" }),
    ],
  },
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
    },
  ],
};
