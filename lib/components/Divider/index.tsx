import styled, { css } from "styled-components";
import { colorTokens, shadeTokens, spacingTokens } from "../../types/tokens";
import { Text } from "../Typography";
import React, { FC } from "react";

export interface DividerProps {
  color?: colorTokens;
  shade?: shadeTokens;
  thickness?: spacingTokens;
  spaceAfter?: spacingTokens;
}

const LineDivider = styled(Text)<DividerProps>`
  ${({
    theme,
    color = "neutral",
    shade = "200",
    thickness = "xxxxsm",
    spaceAfter = "zero",
  }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: ${theme.spacings.xsm} 0px;
    padding-bottom: ${theme.spacings[spaceAfter]};

    border: 0px solid white;

    text-align: center;

    &::before,
    &::after {
      content: "";

      flex: 1 1;
      margin: auto;

      border-top: ${theme.spacings[thickness]} solid
        ${theme.colors[color][shade]};
    }
  `}
`;

const LabelDivider = styled(Text)<{ thickness?: spacingTokens }>`
  padding: 0px ${({ theme }) => theme.spacings.xsm};

  border: ${({ theme, thickness = "xxxxsm" }) => theme.spacings[thickness]}
    solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.spacings.xbig};
`;

const Divider: FC<DividerProps> = ({ children, ...props }) => {
  return (
    <LineDivider {...props}>
      {children && (
        <LabelDivider thickness={props.thickness}>{children}</LabelDivider>
      )}
    </LineDivider>
  );
};

export default Divider;
