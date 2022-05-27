import styled from "styled-components";

import { OverlineLarge } from "../Typography";
import { StatusTagProps } from "./StatusTag.types";

export const StatusTagWrapper = styled.div<
  Pick<StatusTagProps, "variant" | "size">
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: ${({ theme, size }) => theme.statusTag.tagSize[size]};
  padding: 0 ${({ theme }) => theme.spacings.md};

  border: 1px solid
    ${({ theme, variant }) => theme.statusTag.borderColor[variant]};
  border-radius: 64px;

  background-color: ${({ theme, variant }) =>
    theme.statusTag.backgroundColor[variant]};
`;

export const IconWrapper = styled.div<
  Pick<StatusTagProps, "variant" | "label">
>`
  margin-right: ${({ theme, label }) => (label ? theme.spacings.sm : 0)};
  margin-bottom: -2px;

  color: ${({ theme, variant }) => theme.statusTag.iconColor[variant]};
`;

export const StyledOverlineLarge = styled(OverlineLarge)<
  Pick<StatusTagProps, "variant" | "size">
>`
  color: ${({ theme, variant }) => theme.statusTag.labelColor[variant]};
  font-size: ${({ theme, size }) => theme.statusTag.labelSize[size]};
`;
