import { h, AnyComponent } from "preact";
import { render, RenderOptions } from "@testing-library/preact";
import { ThemeProvider } from "styled-components";
import theme from "./themeMock";

const renderWithTheme = (ui: AnyComponent, options?: RenderOptions) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
};

export default renderWithTheme;
