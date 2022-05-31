/* eslint-disable import/export */
import React from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { ThemeProvider } from "styled-components";
import { light as theme } from "../theme";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
