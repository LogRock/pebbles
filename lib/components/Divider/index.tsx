import styled, { css } from "styled-components";
import { colorTokens, shadeTokens, spacingTokens } from "../../types/tokens";

export interface DividerProps {
  color?: colorTokens;
  shade?: shadeTokens;
  thickness?: spacingTokens;
  spaceAfter?: spacingTokens;
}

const Divider = styled.hr<DividerProps>`
  ${({
    theme,
    color = "neutral",
    shade = "200",
    thickness = "xxxxsm",
    spaceAfter = "zero",
  }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings[spaceAfter]};

    border: 0px solid white;
    border-top-width: ${theme.spacings[thickness]};
    border-top-color: ${theme.colors[color][shade]};
  `}
`;

export default Divider;
