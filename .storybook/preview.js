import { ThemeProvider } from "styled-components";
import { withThemes } from "@react-theming/storybook-addon";
import { light, dark } from "../lib/theme";
import { addDecorator } from "@storybook/react";

import "@fontsource/archivo"
import "@fontsource/archivo/variable-full.css"

const themingDecorator = withThemes(ThemeProvider, [light, dark]);
addDecorator(themingDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
