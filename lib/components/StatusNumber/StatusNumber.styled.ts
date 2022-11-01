import styled from "styled-components";

import { ParagraphLarge } from "../Typography";
import { StatusNumberProps } from "./StatusNumber.types";

export const StatusNumberWrapper = styled.div<
  Pick<StatusNumberProps, "variant">
>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: max-content;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
`;

export const IconWrapper = styled.div<Pick<StatusNumberProps, "variant">>`
  margin-right: ${({ theme }) => theme.spacings.sm};

  color: ${({ theme, variant }) => theme.statusNumber.iconColor[variant]};
  font-size: 21px;
`;

export const StyledValueMedium = styled(ParagraphLarge)<
  Pick<StatusNumberProps, "variant">
>`
  color: ${({ theme, variant }) => theme.statusNumber.labelColor[variant]};
  font-size: 18px;
  font-weight: 600;
`;

export const StyledValueLarge = styled(ParagraphLarge)<
  Pick<StatusNumberProps, "variant">
>`
  color: ${({ theme, variant }) => theme.statusNumber.labelColor[variant]};
  font-size: 24px;
  font-weight: 600;
`;
