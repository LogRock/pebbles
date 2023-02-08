import styled, { css } from "styled-components";
import { STATUS_TAG_VARIANTS } from "../StatusTag";
import { spacingTokens } from "../../types/tokens";

export interface NotificationDotProps {
  variant: STATUS_TAG_VARIANTS;
  spaceAfter?: spacingTokens;
}

const NotificationDot = styled.div<NotificationDotProps>`
  ${({ theme, spaceAfter, variant = STATUS_TAG_VARIANTS.NEUTRAL_ALT }) => css`
    display: inline-flex;
    box-sizing: border-box;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    min-width: ${theme.spacings.md};
    height: ${theme.spacings.md};
    margin-bottom: ${spaceAfter
      ? theme.spacings?.[spaceAfter as spacingTokens]
      : 0};
    padding: 0 ${theme.spacings.xxsm};

    border-radius: ${theme.spacings.md};

    background: ${theme.statusTag.color.background[variant]};

    color: ${theme.statusTag.color.content[variant]};
    font-family: ${theme.statusTag.typography.SMALL.fontFamily};
    font-size: 10px;
    font-weight: ${theme.statusTag.typography.SMALL.desktop.weights.normal};
    line-height: ${theme.statusTag.typography.SMALL.desktop.lineHeight};
    text-transform: ${theme.statusTag.typography.SMALL.textTransform};
    vertical-align: super;
  `}
`;

export default NotificationDot;
