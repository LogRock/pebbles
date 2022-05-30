import styled from "styled-components";

import { ParagraphLarge } from "../Typography";
import { StatusTrendProps } from "./StatusTrend.types";

export const StatusTrendWrapper = styled.div<Pick<StatusTrendProps, "variant">>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: max-content;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -7px;
  margin-left: ${({ theme }) => theme.spacings.sm};
`;

export const StyledPrimaryLabel = styled(ParagraphLarge)<
  Pick<StatusTrendProps, "variant">
>`
  color: ${({ theme, variant }) => theme.statusTrend.labelColor[variant]};
  font-size: 16px;
  font-weight: 500;
`;

export const StyledSecondaryLabel = styled(ParagraphLarge)`
  margin-top: -2px;

  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`;
