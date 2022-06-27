import styled from "styled-components";

import { StatusTrendProps } from "./StatusTrend.types";

export const StatusTrendWrapper = styled.div<Pick<StatusTrendProps, "variant">>`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;

  color: ${({ theme, variant }) => theme.statusTrend.labelColor[variant]};
  font-family: ${({ theme }) => theme.buttons.fontFamily};
  font-size: ${({ theme }) => theme.statusTrend.fontSize};
  font-weight: ${({ theme }) => theme.statusTrend.fontWeight};

  svg {
    margin-right: 4px;
  }
`;
