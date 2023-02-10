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

export const StyledBox = styled.div<Required<BoxProps>>`
  ${({ theme, ...props }) => css`
    display: flex;
    box-sizing: border-box;
    flex-direction: ${props.direction};
    flex-grow: ${props.grow ? "1" : "0"};
    flex-shrink: ${props.shrink ? "1" : "0"};
    flex-wrap: ${props.noWrap ? "no-wrap" : "wrap"};
    align-items: ${props.align};
    justify-content: ${props.justify};
    width: ${widthMap[props.width]};
    margin: ${theme.spacings[props.margin]};
    ${props.spaceAfter
      ? css`
          margin-bottom: ${theme.spacings[props.spaceAfter]};
        `
      : ""}
    padding: ${theme.spacings[props.padding]};
    column-gap: ${theme.spacings[props.colGap]};

    border-radius: ${theme.spacings[props.borderRadius]};

    background-color: ${theme.colors[props.backgroundColor][
      props.backgroundShade
    ]};
    box-shadow: ${theme.shadows[props.shadow]};
    row-gap: ${theme.spacings[props.rowGap]};
  `}
`;
