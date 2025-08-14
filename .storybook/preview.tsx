import React from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../lib/theme";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import "@fontsource/archivo";
import "@fontsource/archivo/variable-full.css";

import { IconContext } from "react-icons";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light,
      dark,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
  }),
  (Story) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <IconContext.Provider value={{ style: { fontSize: 20 } }}>
          <Story />
        </IconContext.Provider>
      </LocalizationProvider>
    );
  },
];
