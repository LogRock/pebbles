import styled, { css } from "styled-components";
import { widthTokens } from "../../types/tokens";
import { BoxProps } from "./Box.types";
import * as CSS from "csstype";

const widthMap: Record<widthTokens, CSS.Property.Width> = {
  "1/12": "8.33333333333%",
  "2/12": "16.6666666667%",
  "3/12": "25%",
  "4/12": "33.3333333333%",
  "5/12": "41.6666666667%",
  "6/12": "50%",
  "7/12": "58.3333333333%",
  "8/12": "66.6666666667%",
  "9/12": "75%",
  "10/12": "83.3333333333%",
  "11/12": "91.6666666667%",
  "12/12": "100%",
};

const Box = styled.div<BoxProps>`
  ${({
    theme,
    align = "center",
    backgroundColor,
    backgroundShade = "500",
    borderRadius = "zero",
    colGap = "zero",
    direction = "column",
    justify = "flex-start",
    margin = "zero",
    padding = "zero",
    rowGap = "zero",
    shadow = "none",
    noWrap = false,
    width = "12/12",
    grow = false,
    shrink = false,
    spaceAfter = "zero",
    borderColor = "neutral",
    borderShade = "200",
    borderWidth = "zero",
    display = "flex",
    gridColumns = "unset",
    gridRows = "unset",
    gridArea = "unset",
  }) => css`
    display: ${display};
    box-sizing: border-box;
    grid-area: ${gridArea};
    grid-template-columns: ${gridColumns};
    grid-template-rows: ${gridRows};
    flex-direction: ${direction};
    flex-grow: ${grow ? "1" : "0"};
    flex-shrink: ${shrink ? "1" : "0"};
    flex-wrap: ${noWrap ? "no-wrap" : "wrap"};
    align-items: ${align};
    justify-content: ${justify};
    width: ${widthMap[width]};
    margin: ${theme.spacings[margin]};
    ${spaceAfter
      ? css`
          margin-bottom: ${theme.spacings[spaceAfter]};
        `
      : ""}
    padding: ${theme.spacings[padding]};
    column-gap: ${theme.spacings[colGap]};

    border-width: ${theme.spacings[borderWidth]};
    border-style: solid;
    border-radius: ${theme.spacings[borderRadius]};
    border-color: ${theme.colors[borderColor][borderShade]};

    background-color: ${backgroundColor
      ? theme.colors[backgroundColor][backgroundShade]
      : "transparent"};
    box-shadow: ${theme.shadows[shadow]};
    row-gap: ${theme.spacings[rowGap]};
  `}
`;

export default Box;
