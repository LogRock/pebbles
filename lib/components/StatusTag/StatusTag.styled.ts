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
  height: ${({ theme, size }) => theme.statusTag.tagSize[size || "medium"]};
  padding: 0 16px;

  border: 1px solid
    ${({ theme, variant }) => theme.statusTag.borderColor[variant || "neutral"]};
  border-radius: 64px;

  background-color: ${({ theme, variant }) =>
    theme.statusTag.backgroundColor[variant || "neutral"]};
`;

export const IconWrapper = styled.div<Pick<StatusTagProps, "variant">>`
  margin-right: 14px;
  margin-bottom: -3px;

  color: ${({ theme, variant }) =>
    theme.statusTag.iconColor[variant || "neutral"]};
`;

export const StyledOverlineLarge = styled(OverlineLarge)<
  Pick<StatusTagProps, "variant" | "size">
>`
  color: ${({ theme, variant }) =>
    theme.statusTag.labelColor[variant || "neutral"]};
  font-size: ${({ theme, size }) =>
    theme.statusTag.labelSize[size || "medium"]};
`;
