import styled, { css } from "styled-components";
import { BoxProps } from "./Box.types";

export const StyledBox = styled.div<Required<BoxProps>>`
  ${({ theme, ...props }) => css`
    display: flex;
    flex-direction: ${props.direction};
    flex-wrap: ${props.noWrap ? "no-wrap" : "wrap"};
    align-items: ${props.align};
    justify-content: ${props.justify};
    margin: ${theme.spacings[props.margin]};
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
