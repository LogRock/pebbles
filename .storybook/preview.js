import React from "react";
import { ThemeProvider } from "styled-components";
import { withThemes } from "@react-theming/storybook-addon";
import { light, dark } from "../lib/theme";
import { addDecorator } from "@storybook/react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import "@fontsource/archivo";
import "@fontsource/archivo/variable-full.css";

import { IconContext } from "react-icons";

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

export const decorators = [
  (Story) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <IconContext.Provider value={{ style: { fontSize: 20 } }}>
        {<Story />}
      </IconContext.Provider>
    </LocalizationProvider>
  ),
];
