import styled from "styled-components";

import { StatusTrendProps } from "./StatusTrend.types";
import { spacingTokens } from "../../types/tokens";

export const StatusTrendWrapper = styled.div<
  Pick<StatusTrendProps, "variant" | "spaceAfter">
>`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme, variant }) => theme.statusTrend.labelColor[variant]};
  font-family: ${({ theme }) => theme.buttons.fontFamily};
  font-size: ${({ theme }) => theme.statusTrend.fontSize};
  font-weight: ${({ theme }) => theme.statusTrend.fontWeight};

  svg {
    margin-right: 4px;
  }
`;
