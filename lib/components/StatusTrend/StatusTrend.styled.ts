import styled from "styled-components";

import { ParagraphLarge } from "../Typography";
import { StatusTrendProps } from "./StatusTrend.types";

export const StatusTrendWrapper = styled.div<Pick<StatusTrendProps, "variant">>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: max-content;
`;

export const LabelWrapper = styled.div<{ hasSecondaryLabel: Boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: ${(props: any) => (props.hasSecondaryLabel ? "-7px" : "-4px")};
  margin-left: ${({ theme }) => theme.spacings.sm};
`;

export const StyledPrimaryLabel = styled(ParagraphLarge)<
  Pick<StatusTrendProps, "variant">
>`
  color: ${({ theme, variant }) => theme.statusTrend.labelColor[variant]};
  font-size: ${({ theme }) => theme.statusTrend.primaryLabel.fontSize};
  font-weight: ${({ theme }) => theme.statusTrend.primaryLabel.fontWeight};
`;

export const StyledSecondaryLabel = styled(ParagraphLarge)`
  margin-top: -2px;

  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: ${({ theme }) => theme.statusTrend.secondaryLabel.fontSize};
  font-weight: ${({ theme }) => theme.statusTrend.secondaryLabel.fontWeight};
  text-transform: uppercase;
`;
